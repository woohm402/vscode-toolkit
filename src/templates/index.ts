export const cssTemplate = () => `.wrapper {

}
`;

export const componentTemplate = (
  componentName: string,
) => `import { ${getPresenterName(componentName)} } from './index.presenter';

import styles from './index.module.css';

export const ${componentName} = ({
  props,
}: {
  props: Parameters<typeof ${getPresenterName(componentName)}.useViewModel>[0];
}) => {
  const viewModel = ${getPresenterName(componentName)}.useViewModel({});

  return (
    <div className={styles.wrapper}>

    </div>
  );
};
`;

export const presenterTemplate = (componentName: string) => `type Props = {

};

type ViewModel = {

};

export const ${getPresenterName(componentName)} = {
  useViewModel: (props: Props): ViewModel => {

  },
}
`;

const getPresenterName = (componentName: string) =>
  componentName.slice(0, 1).toLowerCase() + componentName.slice(1) + 'Presenter';
