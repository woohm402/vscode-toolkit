export const cssTemplate = () => `.wrapper {

}
`;

export const componentTemplate = (
  componentName: string
) => `import styles from './index.module.css';

export const ${componentName} = ({

}: {

}) => {
  return (
    <div className={styles.wrapper}>

    </div>
  );
};
`;
