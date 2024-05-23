namespace QrProject.Domain.Dtos
{
    public class OrganizationDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    public class CreateOrganizationDto
    {
        public string userEmail { get; set; }
        public string orgName { get; set; }
    }
}
