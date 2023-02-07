package agendavacinacao;

import java.util.Scanner;
import java.util.List;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		VacinaDAO dao = new VacinaDAO();

		while (true) {
			System.out.println("1 - Consultar ID");
			System.out.println("2 - Inserir");
			System.out.println("3 - Excluir");
			System.out.println("4 - Listar todas as vacinas");
			System.out.println("5 - Sair");
			System.out.print("Entre com uma opção: ");
			int option = scanner.nextInt();
			
			Vacina vacina = new Vacina();

			switch (option) {
			case 1:
				System.out.print("Insira o ID da vacina: ");
				int id = scanner.nextInt();
				vacina = dao.findById(id);
				if (vacina != null) {
					System.out.println("ID: " + vacina.getId());
					System.out.println("Título: " + vacina.getTitulo());
					System.out.println("Descrição: " + vacina.getDescricao());
					System.out.println("Doses: " + vacina.getDoses());
					System.out.println("Periodicidade: " + vacina.getPeriodicidade());
					System.out.println("Intervalo: " + vacina.getIntervalo());
				} else {
					System.out.println("Vacina não encontrada");
				}
				break;
			
			case 2:
				vacina = new Vacina();
				scanner.nextLine();
				
				System.out.print("Insira o título da vacina: ");
				vacina.setTitulo(scanner.nextLine());
				
				System.out.print("Insira a descrição: ");
				vacina.setDescricao(scanner.nextLine());
				
				System.out.print("Insira as doses: ");
				vacina.setDoses(scanner.nextInt());
				
				System.out.print("Insira a periodicidade: ");
				vacina.setPeriodicidade(scanner.nextInt());
				scanner.nextLine();
				
				System.out.print("Insira a intervalo: ");
				vacina.setIntervalo(scanner.nextInt());
				scanner.nextLine();
				
				dao.insert(vacina);
				System.out.println("Nova vacinada adicionada com sucesso");
				break;
			
			case 3:
				System.out.print("Insira o ID da vacina: ");
				id = scanner.nextInt();
				dao.delete(id);
				System.out.println("Vacina removida com sucesso");
				break;
			
			case 4:
				List<Vacina> vacinas = dao.listAll();
				for (Vacina vac : vacinas) {
					System.out.println("ID: " + vac.getId());
					System.out.println("Titulo: " + vac.getTitulo());
					System.out.println("Descrição: " + vac.getDescricao());
					System.out.println("Doses: " + vac.getDoses());
					System.out.println("Periodicidade: " + vac.getPeriodicidade());
					System.out.println("Intervalo: " + vac.getIntervalo());
					System.out.println();
				}
				break;
			case 5:
				System.exit(0);
				break;
			default:
				System.out.println("Opção inválida");
				break;
			}
		}
	}
}
