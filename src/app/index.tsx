import Aluno from "@/components/Aluno";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Gato from "@/components/Gato";
import Multiplicacao from "@/components/Multiplicacao";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Boa noite.</Text>

      <Gato />
      <Cachorro nome="Caramelo" raca="pitbul" />

      <Funcionario 
        nome="Rafael Klein" 
        idade={16} 
        setor="Tecnologia da Informacao" 
      />

      <Aluno 
        nome="Rafael Klein" 
        idade={16} 
        turma="2 Ano A" 
        nota1={8.5} 
        nota2={9.5} 
      />

      <Multiplicacao 
        valor1={2} 
        valor2={4} 
        valor3={5} 
      />
      <TextInput placeholder="Digite algo..."/>
      <Image source={{uri: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcWbwWYOcI6vA-lYYg7v9VzBnzzldIkR57H67e5CbHDBU5UXz4Ft0EmA&s=10")}} style={{width: 200, height: 200}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});