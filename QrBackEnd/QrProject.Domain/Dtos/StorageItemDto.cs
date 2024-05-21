namespace QrProject.Domain.Dtos
{
    public class StorageItemDto
    {
        public Guid Id { get; set; }
        public Guid OrgId { get; set; }
        public int Quantity { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public double PricePerOne { get; set; }
        public string Image { get; set; }
        public string Code { get; set; }
        public string Category { get; set; }
    }
}
