package agendavacinacao;

import java.util.List;

import javax.persistence.*;

public class AgendaDAO {
	private EntityManagerFactory factory;
	private EntityManager manager;

	public AgendaDAO() {
		factory = Persistence.createEntityManagerFactory("agenda_pu");
		manager = factory.createEntityManager();
	}

	// Busca por ID
	public Agenda findById(int id) {
		return manager.find(Agenda.class, id);
	}

	// Inserir 
	public void insert(Agenda agenda) {
		manager.getTransaction().begin();
		manager.persist(agenda);
		manager.getTransaction().commit();
	}

	// Excluir
	public void delete(int id) {
		Agenda agenda= findById(id);
		if (agenda != null) {
			manager.getTransaction().begin();
			manager.remove(agenda);
			manager.getTransaction().commit();
		} else {
			System.out.println("Agenda não encontrada");
		}
	}

	// Listar todos usuários
	public List<Agenda> listAll() {
		TypedQuery<Agenda> query = manager.createQuery("SELECT a FROM Agenda a", Agenda.class);
		return query.getResultList();
	}
}
