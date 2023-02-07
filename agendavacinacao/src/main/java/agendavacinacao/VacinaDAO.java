package agendavacinacao;

import java.util.List;

import javax.persistence.*;

public class VacinaDAO {
	private EntityManagerFactory factory;
	private EntityManager manager;

	public VacinaDAO() {
		factory = Persistence.createEntityManagerFactory("vacina_pu");
		manager = factory.createEntityManager();
	}

	// Busca por ID
	public Vacina findById(int id) {
		return manager.find(Vacina.class, id);
	}

	// Inserir 
	public void insert(Vacina vacina) {
		manager.getTransaction().begin();
		manager.persist(vacina);
		manager.getTransaction().commit();
	}

	// Excluir
	public void delete(int id) {
		Vacina vacina = findById(id);
		if (vacina != null) {
			manager.getTransaction().begin();
			manager.remove(vacina);
			manager.getTransaction().commit();
		} else {
			System.out.println("Vacina não encontrada");
		}
	}

	// Listar tudo
	public List<Vacina> listAll() {
		TypedQuery<Vacina> query = manager.createQuery("SELECT v FROM Vacina v", Vacina.class);
		return query.getResultList();
	}
}
