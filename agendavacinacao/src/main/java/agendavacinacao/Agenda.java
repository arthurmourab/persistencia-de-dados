package agendavacinacao;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "agendas")
public class Agenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "data")
    private Date data;
    
    @Column(name = "hora")
    private String hora;
    
    @Column(name = "situacao")
    private String situacao;
    
    @Column(name = "data_situacao") 
    private Date data_situacao;
    
    @Column(name = "observacoes")
    private String observacoes;
    
    @Column(name = "vacina_id")
    private int vacina_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Date getDataSituacao() {
        return data_situacao;
    }

    public void setDataSituacao(Date dataSituacao) {
        this.data_situacao = dataSituacao;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }
    
    public int getVacinaId() {
        return vacina_id;
    }

    public void setVacinaId(int vacina_id) {
        this.vacina_id = vacina_id;
    }

}
