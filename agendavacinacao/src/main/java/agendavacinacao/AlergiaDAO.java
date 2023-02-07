package agendavacinacao;

import java.util.List;

import javax.persistence.*;

public class AlergiaDAO {
	private EntityManagerFactory factory;
	private EntityManager manager;

	public AlergiaDAO() {
		factory = Persistence.createEntityManagerFactory("alergia_pu");
		manager = factory.createEntityManager();
	}

	// Busca por ID
	public Alergia findById(int id) {
		return manager.find(Alergia.class, id);
	}

	// Inserir 
	public void insert(Alergia alergia) {
		manager.getTransaction().begin();
		manager.persist(alergia);
		manager.getTransaction().commit();
	}

	// Excluir
	public void delete(int id) {
		Alergia alergia = findById(id);
		if (alergia != null) {
			manager.getTransaction().begin();
			manager.remove(alergia);
			manager.getTransaction().commit();
		} else {
			System.out.println("Alergia não encontrada");
		}
	}

	// Listar todos usuários
	public List<Alergia> listAll() {
		TypedQuery<Alergia> query = manager.createQuery("SELECT a FROM Alergia a", Alergia.class);
		return query.getResultList();
	}
}
