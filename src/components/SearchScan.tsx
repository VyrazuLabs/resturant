import { ActionIcon, Card, createStyles, Flex, Grid, Image, Input } from "@mantine/core";
import searchIcon from '../assets/logos/search-icon.svg';
import React from 'react';
import scanIcon from '../assets/logos/scan.svg';

interface SearchProps {
  searchInput: any;
}

const useStyle = createStyles(() => ({
  scanItem: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
  },
  searchItem: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    input: {
      fontSize: "12px",
    },
    "input:: placeholder": {
      fontSize: "12px",
    },
  },
}));

const SearchScan = ({ searchInput }: SearchProps) => {
      const { classes } = useStyle();

  return (
    <>
      <Flex pb={25}>
        <Flex direction="column" w='100%' align="left">
          <Input
            placeholder="Search..."
            className={classes.searchItem}
            size="xl"
            radius={20}
            onChange={(e) => {
              searchInput(e.target.value);
            }}
            rightSection={
              <div>
                <Image
                  width="auto"
                  display="block"
                  height="auto"
                  src={searchIcon}
                />
              </div>
            }
          />
        </Flex>
        <Flex direction="column" align="right" pl='5px'>
          <ActionIcon size={60} className={classes.scanItem}>
            <Image width="auto" height="auto" src={scanIcon} />
          </ActionIcon>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchScan