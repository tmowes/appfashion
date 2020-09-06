import React from 'react'
import { ScrollView } from 'react-native'

import OutfitColorsSelector from './OutfitColorsSelector'
import OutfitSizesSelector from './OutfitSizesSelector'
import OutfitTypesSelector from './OutfitTypesSelector'
import OutfitBrandsSelector from './OutfitBrandsSelector'
import { configsData } from './data'
import { Container, TitleConfig, ConfigList } from './styles'

const TabConfiguration: React.FC = () => {
  return (
    <Container>
      {configsData.map((config, index) => (
        <ConfigList key={index}>
          <TitleConfig>{config.outfitTypes.title}</TitleConfig>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {config.outfitTypes.types.map(type => (
              <OutfitTypesSelector key={type} {...{ type }} />
            ))}
          </ScrollView>
          <TitleConfig>{config.outfitSizes.title}</TitleConfig>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {config.outfitSizes.sizes.map(size => (
              <OutfitSizesSelector key={size} {...{ size }} />
            ))}
          </ScrollView>
          <TitleConfig>{config.outfitColors.title}</TitleConfig>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {config.outfitColors.colors.map(color => (
              <OutfitColorsSelector key={color} {...{ color }} />
            ))}
          </ScrollView>
          <TitleConfig>{config.outfitBrands.title}</TitleConfig>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            {config.outfitBrands.brands.map(brand => (
              <OutfitBrandsSelector key={brand} {...{ brand }} />
            ))}
          </ScrollView>
        </ConfigList>
      ))}
    </Container>
  )
}

export default TabConfiguration
