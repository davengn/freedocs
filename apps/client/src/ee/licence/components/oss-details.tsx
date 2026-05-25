import { Group, List, Stack, Table, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const freedocsFeatures = [
  "AI Integration (Chat, Search & Assistant)",
  "MCP Support",
  "Page-level Permissions",
  "Page Verification & Approval Workflow",
  "Full-text Search in Attachments (PDF, DOCX)",
  "Resolve Comments",
  "Workspace and space public sharing controls",
  "Confluence Import",
  "PDF & DOCX Import",
  "Templates",
];

export default function OssDetails() {
  return (
    <Stack gap="lg">
      <Table.ScrollContainer minWidth={500} py="md">
        <Table
          variant="vertical"
          verticalSpacing="sm"
          layout="fixed"
          withTableBorder
        >
          <Table.Tbody>
            <Table.Tr>
              <Table.Th w={160}>Edition</Table.Th>
              <Table.Td>
                <Group wrap="nowrap">
                  Freedocs Free
                  <div>
                    <ThemeIcon
                      color="green"
                      variant="light"
                      size={24}
                      radius="xl"
                    >
                      <IconCheck size={16} />
                    </ThemeIcon>
                  </div>
                </Group>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Stack gap="md">
        <Text fw={500}>Included in Freedocs:</Text>

        <List
          spacing={4}
          size="sm"
          icon={
            <ThemeIcon size={20} color={"gray"} radius="xl">
              <IconCheck size={14} />
            </ThemeIcon>
          }
        >
          {freedocsFeatures.map((feature) => (
            <List.Item key={feature}>{feature}</List.Item>
          ))}
        </List>

        <Text size="sm" c="dimmed">
          These capabilities are included in Freedocs. Administrators can still
          limit access with roles and workspace policies.
        </Text>
      </Stack>
    </Stack>
  );
}
