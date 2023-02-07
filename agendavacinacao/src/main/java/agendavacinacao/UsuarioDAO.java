package agendavacinacao;

import java.util.List;

import javax.persistence.*;

public class UsuarioDAO {
	private EntityManagerFactory factory;
	private EntityManager manager;

	public UsuarioDAO() {
		factory = Persistence.createEntityManagerFactory("usuario_pu");
		manager = factory.createEntityManager();
	}

	// Busca por ID
	public Usuario findById(int id) {
		return manager.find(Usuario.class, id);
	}

	// Inserir 
	public void insert(Usuario usuario) {
		manager.getTransaction().begin();
		manager.persist(usuario);
		manager.getTransaction().commit();
	}

	// Excluir
	public void delete(int id) {
		Usuario usuario = findById(id);
		if (usuario != null) {
			manager.getTransaction().begin();
			manager.remove(usuario);
			manager.getTransaction().commit();
			
		} else {
			System.out.println("Usuário não encontrado");
		}
	}

	// Listar todos usuários
	public List<Usuario> listAll() {
		TypedQuery<Usuario> query = manager.createQuery("SELECT u FROM Usuario u", Usuario.class);
		return query.getResultList();
	}
}
