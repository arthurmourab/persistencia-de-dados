package agendavacinacao;

import java.util.Scanner;
import java.util.List;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		VacinaDAO vacinaDao = new VacinaDAO();
		AgendaDAO agendaDao = new AgendaDAO();
		UsuarioDAO usuarioDao = new UsuarioDAO();
		AlergiaDAO alergiaDao = new AlergiaDAO();

		while (true) {
			System.out.println("1 - Cadastrar novo usuário");
			System.out.println("2 - Cadastrar nova vacina");
			System.out.println("3 - Cadastrar nova agenda");
			System.out.println("4 - Cadastrar nova alergia");
			System.out.println();
			
			System.out.println("5 - Remover usuário");
			System.out.println("6 - Remover vacina");
			System.out.println("7 - Remover agenda");
			System.out.println("8 - Remover alergia");
			System.out.println();
			
			System.out.println("9 - Listar todos usuários");
			System.out.println("10 - Listar todas vacinas");
			System.out.println("11 - Listar todas agendas");
			System.out.println("12 - Listar todas alergias");
			System.out.println();

			System.out.println("13 - Sair");
			
			System.out.print("Entre com uma opção: ");
			int option = scanner.nextInt();

			Vacina vacina = new Vacina();
			Usuario usuario = new Usuario();
			Agenda agenda = new Agenda();
			Alergia alergia = new Alergia();

			switch (option) {
			case 1:
				usuario = new Usuario();
				scanner.nextLine();
				
				System.out.println();
				System.out.print("Insira o nome: ");
				usuario.setNome(scanner.nextLine());

				System.out.print("Insira o logradouro: ");
				usuario.setLogradouro(scanner.nextLine());

				System.out.print("Insira o setor: ");
				usuario.setSetor(scanner.nextLine());

				System.out.print("Insira a cidade: ");
				usuario.setCidade(scanner.nextLine());

				System.out.print("Insira o estado: ");
				usuario.setUf(scanner.nextLine());

				System.out.print("Insira o sexo: ");
				usuario.setSexo(scanner.nextLine().charAt(0));

				System.out.print("Insira a data de nascimento (yyyy-mm-dd): ");
				SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
				Date dt_nasc;
				try {
					dt_nasc = format.parse(scanner.nextLine());
					usuario.setDataNascimento(dt_nasc);
				} catch (ParseException e) {
					e.printStackTrace();
				}

				usuarioDao.insert(usuario);
				System.out.println("Novo usuário adicionado com sucesso!");
				System.out.println();
				break;

			case 2:
				vacina = new Vacina();
				scanner.nextLine();

				System.out.println();
				System.out.print("Insira o título da vacina: ");
				vacina.setTitulo(scanner.nextLine());

				System.out.print("Insira a descrição: ");
				vacina.setDescricao(scanner.nextLine());

				System.out.print("Insira as doses: ");
				vacina.setDoses(scanner.nextInt());

				System.out.print("Insira a periodicidade (1 - dia, 2 - semana, 3 - mês, 4 - ano): ");
				vacina.setPeriodicidade(scanner.nextInt());
				scanner.nextLine();

				System.out.print("Insira a intervalo: ");
				vacina.setIntervalo(scanner.nextInt());
				scanner.nextLine();

				vacinaDao.insert(vacina);
				System.out.println("Nova vacinada adicionada com sucesso!");
				System.out.println();
				break;

			case 3:
				agenda = new Agenda();
				scanner.nextLine();

				System.out.println();
				System.out.print("Insira a data da agenda (yyyy-mm-dd): ");
				format = new SimpleDateFormat("yyyy-mm-dd");
				Date dt_agenda;
				try {
					dt_agenda = format.parse(scanner.nextLine());
					agenda.setData(dt_agenda);
				} catch (ParseException e) {
					e.printStackTrace();
				}

				System.out.print("Insira a hora da agenda (hh:mm): ");
				agenda.setHora(scanner.nextLine());

				System.out.print("Insira a situação: ");
				agenda.setSituacao(scanner.nextLine());

				System.out.print("Insira a data da situação (yyyy-mm-dd): ");
				format = new SimpleDateFormat("yyyy-mm-dd");
				Date dt_situacao;
				try {
					dt_situacao = format.parse(scanner.nextLine());
					agenda.setData(dt_situacao);
				} catch (ParseException e) {
					e.printStackTrace();
				}

				System.out.print("Insira as observações: ");
				agenda.setObservacoes(scanner.nextLine());

				System.out.print("Insira o id da vacina: ");
				agenda.setVacinaId(scanner.nextInt());
				scanner.nextLine();

				agendaDao.insert(agenda);
				System.out.println("Nova agenda adicionada com sucesso!");
				System.out.println();
				break;
				
			case 4:
				alergia = new Alergia();
				scanner.nextLine();

				System.out.println();
				System.out.print("Insira o nome da alergia: ");
				alergia.setNome(scanner.nextLine());

				alergiaDao.insert(alergia);
				System.out.println("Nova alergia adicionada com sucesso!");
				System.out.println();
				break;
				

			case 5:
				System.out.print("Insira o ID do usuário que deseja remover: ");
				int id = scanner.nextInt();
				usuarioDao.delete(id);
				System.out.println("Usuário removido com sucesso");
				System.out.println();
				break;
				
			case 6:
				System.out.print("Insira o ID da vacina que deseja remover: ");
				id = scanner.nextInt();
				vacinaDao.delete(id);
				System.out.println("Vacina removida com sucesso");
				System.out.println();
				break;
				
			case 7:
				System.out.print("Insira o ID da agenda que deseja remover: ");
				id = scanner.nextInt();
				agendaDao.delete(id);
				System.out.println("Agenda removida com sucesso");
				System.out.println();
				break;
				
			case 8:
				System.out.print("Insira o ID da alergia que deseja remover: ");
				id = scanner.nextInt();
				alergiaDao.delete(id);
				System.out.println("Alergia removida com sucesso");
				System.out.println();
				break;

			case 9:
				List<Usuario> usuarios = usuarioDao.listAll();
				System.out.println();
				for (Usuario user : usuarios) {
					System.out.println("Nome: " + user.getNome());
					System.out.println("Data de nascimento: " + user.getNome());
					System.out.println("Sexo: " + user.getSexo());
					System.out.println("Logradouro: " + user.getLogradouro());
					System.out.println("Setor: " + user.getSetor());
					System.out.println("Cidade: " + user.getCidade());
					System.out.println("Estado: " + user.getUf());
					System.out.println();
				}
				break;
				
			case 10:
				List<Vacina> vacinas = vacinaDao.listAll();
				System.out.println();
				for (Vacina vac : vacinas) {
					System.out.println("Título: " + vac.getTitulo());
					System.out.println("Descrição: " + vac.getDescricao());
					System.out.println("Doses: " + vac.getDoses());
					System.out.println("Periodicidade: " + vac.getPeriodicidade());
					System.out.println("Intervalo: " + vac.getIntervalo());
					System.out.println();
				}
				break;
				
			case 11:
				List<Agenda> agendas = agendaDao.listAll();
				System.out.println();
				for (Agenda agen : agendas) {
					System.out.println("Data: " + agen.getData());
					System.out.println("Hora: " + agen.getHora());
					System.out.println("Situação: " + agen.getSituacao());
					System.out.println("Data da situação: " + agen.getDataSituacao());
					System.out.println("Observações: " + agen.getObservacoes());
					System.out.println("Id da Vacina: " + agen.getVacinaId());
					System.out.println();
				}
				break;
				
			case 12:
				List<Alergia> alergias = alergiaDao.listAll();
				System.out.println();
				for (Alergia aler : alergias) {
					System.out.println("Nome: " + aler.getNome());
					System.out.println();
				}
				break;
			case 13:
				System.exit(0);
				break;
			default:
				System.out.println("Opção inválida! Selecione uma opção válida");
				break;
			}
		}
	}
}
