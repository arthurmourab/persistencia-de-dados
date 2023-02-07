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
    private Date hora;
    
    @Column(name = "situacao")
    private char situacao;
    
    @Column(name = "data_situacao") 
    private Date data_situacao;
    
    @Column(name = "observacoes")
    private String observacoes;

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

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public char getSituacao() {
        return situacao;
    }

    public void setSituacao(char situacao) {
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

}
