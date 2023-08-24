import axios from "axios";

export const getProperties = async () => {
  try {
    const { data } = await axios.get(
      "/jsonapi/node/property?include=field_property_image"
    );

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const formattedData = data.data.map((item: any) => {
      const findUrl: any = data.included.find(
        (img: any) => img.id === item.relationships.field_property_image.data.id
      );
      const imageUrl: string = findUrl?.attributes?.uri?.url;

      return {
        ...item,
        imageUrl,
        title: item.attributes.title,
      };
    });

    return formattedData;
  } catch (error) {
    console.error({ error });
  }
};
