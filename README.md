# Notas de aula

Curso: Tecnologia em Sistemas para Internet

Disciplina: Programação para Dispositivos Móveis I (2024-1)

aluno:  murilo silva de souza

---

### Comandos utilizados na aula

#### Criar um projeto React Native
```
npx create-expo-app --template blank meu-app-saude
```

#### Instalar o React Navigation
```
npm install @react-navigation/native
```

#### Instalar as dependências do React Navigation
```
npx expo install react-native-screens react-native-safe-area-context
```

#### Instalar o Bottom Tab Navigator
```
npm install @react-navigation/bottom-tabs
```

#### Iniciar o projeto
```
npx expo start 
```

#### Iniciar o projeto no Android
```
npx expo start --android
```

# App de Fotos

Este é um aplicativo de fotos desenvolvido em React Native usando o Bottom Tab Navigator do React Navigation.

## Funcionalidades

- Quatro abas de navegação: Home, Profile, Settings, e Gallery.
- Cada aba contém seu próprio layout e funcionalidade.
- Estilização feita de forma convencional usando StyleSheet do React Native.

## Dependências

- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `@expo/vector-icons`
- `react-native`
- `expo`

## Instalação

1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.
3. Execute `expo start` para iniciar o aplicativo.

## Estrutura de Pastas

