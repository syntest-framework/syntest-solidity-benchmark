const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerqkzyhZ3 = await vnxManager.new({from: accounts[0]});
		const uintXkOHICg = BigInt("352")
		const addressWU2hLNy = accounts[1]
		const uintK4dHFL2 = BigInt("1921")
		const stringwq7iKGe = "tevSNnLxz6TkAedvnmr3X8rbS36KLJ07DB6LL9GJn62xGreM3eHNTOh6cSwmf4ACN5yBXjmpW3GjLzG1muYEbjYUekxTlAOQ"
		await vnxManagerqkzyhZ3.renounceOwnership.call({from: accounts[1]});
		await vnxManagerqkzyhZ3.renounceOwnership.call({from: accounts[5]});
		const addressKsaxAk3 = await vnxManagerqkzyhZ3.addBearer.call(addressWU2hLNy, uintXkOHICg, {from: "0x0000000000000000000000000000000000000001"});
		const boolKQrolv3 = await vnxManagerqkzyhZ3.isAdmin.call({from: accounts[3]});
		const uint256J2v9FSg = await vnxManagerqkzyhZ3.addRole.call(stringwq7iKGe, uintK4dHFL2, {from: accounts[0]});

		await expect(vnxManagerqkzyhZ3.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroaaarct = await vnxManager.new({from: accounts[5]});
		const boolFOfApzQ = await vnxManageroaaarct.isAdmin.call({from: accounts[2]});
		await vnxManageroaaarct.renounceOwnership.call({from: accounts[3]});
		const boolrDOw84B = await vnxManageroaaarct.isOwner.call({from: accounts[0]});

		assert.equal(boolFOfApzQ, false)
		await expect(vnxManageroaaarct.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlKd6iNW = await vnxManager.new({from: accounts[2]});
		const uintOhfqaKC = BigInt("1353")
		const addressCBiPC5x = accounts[3]
		const addressk73uGkE = accounts[4]
		const uintK9iGYTt = BigInt("1429")
		const addressw9RL0B = accounts[3]
		const addressEQf0LF = await vnxManagerlKd6iNW.removeBearer.call(addressCBiPC5x, uintOhfqaKC, {from: "0x0000000000000000000000000000000000000001"});
		const addresszBZwitC = await vnxManagerlKd6iNW.transferOwnership.call(addressk73uGkE, {from: accounts[3]});
		await vnxManagerlKd6iNW.onlyAdmin.call({from: accounts[4]});
		const addressDIETt39 = await vnxManagerlKd6iNW.removeBearer.call(addressw9RL0B, uintK9iGYTt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MTwp8WE = await vnxManagerlKd6iNW.totalRoles.call({from: accounts[5]});

		await expect(vnxManagerlKd6iNW.removeBearer.call(addressCBiPC5x, uintOhfqaKC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjq2Kp5t = await vnxManager.new({from: accounts[3]});
		const boolKHcKHo = await vnxManagerjq2Kp5t.isAdmin.call({from: accounts[1]});
		const uint256uCAcUoj = await vnxManagerjq2Kp5t.totalRoles.call({from: accounts[5]});
		await vnxManagerjq2Kp5t.onlyAdmin.call({from: accounts[1]});

		assert.equal(boolKHcKHo, false)
		assert.equal(uint256uCAcUoj, BigInt("1"))
		await expect(vnxManagerjq2Kp5t.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerbkZQvbQ = await vnxManager.new({from: accounts[1]});
		const uintpOhuS7W = BigInt("1551")
		const stringNdtdW9P = "twCS2UlDXCYARBc9i98CbacWfCWdpYcjfiTwg8tYQVaVY6vtVtshaMrBph6TIdAIdRSJ2zkMU5MkUYPxIP2l69VO4pTj2J"
		const stringxZKUtYy = "6NzO9rsBnvd1jvOHpWaL9uSyKhj0urmpyL8BUpsMbP6M5tW1gLxKKdKPK3xh"
		const uintL145G5H = BigInt("1561")
		const stringMOoZ6mY = "yXHveLdfDMbsV0fRX"
		const uint2561yYQYm = await vnxManagerbkZQvbQ.addRole.call(stringNdtdW9P, uintpOhuS7W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iwmHJwo = await vnxManagerbkZQvbQ.addRootRole.call(stringxZKUtYy, {from: accounts[0]});
		const uint256IFsTnk = await vnxManagerbkZQvbQ.addRole.call(stringMOoZ6mY, uintL145G5H, {from: accounts[3]});
		const uint256iYKJ33u = await vnxManagerbkZQvbQ.totalRoles.call({from: accounts[1]});

		await expect(vnxManagerbkZQvbQ.addRole.call(stringNdtdW9P, uintpOhuS7W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageryCtho6w = await vnxManager.new({from: accounts[5]});
		const addressgrjeYsV = accounts[4]
		const addressXIAfnSK = accounts[4]
		const boolHlrOQEU = await vnxManageryCtho6w.isOwner.call({from: accounts[4]});
		const boolnogqkyo = await vnxManageryCtho6w.transferContractOwnership.call(addressXIAfnSK, addressgrjeYsV, {from: accounts[3]});

		assert.equal(boolHlrOQEU, false)
		await expect(vnxManageryCtho6w.transferContractOwnership.call(addressXIAfnSK, addressgrjeYsV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVaNKx13 = await vnxManager.new({from: accounts[1]});
		const uintMmLJeA = BigInt("1015")
		const addressLv6QILP = accounts[1]
		const uintwrYtRFy = BigInt("1072")
		const addressQkw0CX = accounts[5]
		const uintof8QzB = BigInt("1458")
		const stringmyzBor = "pXDnVVCXUx2YYIzWAMBKdmaNAKPL8lH3pvz6MnE9jp3grFGNMv"
		const uintsoRfPYv = BigInt("1462")
		const stringgZ6cjrX = "5l2Sdc4EEl4JRGkemRQu42wwi7EwHR2UoEV9RE3yVqctu6fpwQKHtCfrWUxVbktc"
		const boolkG0NZ4T = await vnxManagerVaNKx13.hasRole.call(addressLv6QILP, uintMmLJeA, {from: accounts[4]});
		const addressZwOIffw = await vnxManagerVaNKx13.addBearer.call(addressQkw0CX, uintwrYtRFy, {from: accounts[0]});
		const uint2561usu0V = await vnxManagerVaNKx13.addRole.call(stringmyzBor, uintof8QzB, {from: accounts[4]});
		const uint256N5NSBHM = await vnxManagerVaNKx13.addRole.call(stringgZ6cjrX, uintsoRfPYv, {from: accounts[5]});
		const boolHgQ4tNd = await vnxManagerVaNKx13.isAdmin.call({from: accounts[3]});
		await vnxManagerVaNKx13.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolkG0NZ4T, false)
		await expect(vnxManagerVaNKx13.addBearer.call(addressQkw0CX, uintwrYtRFy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlDMiFqb = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpgOXoB = BigInt("784")
		const addresshNeIH24 = accounts[1]
		const uintVEw3Akk = BigInt("252")
		const addressxDXD8pL = accounts[5]
		const addressgVYuVbP = await vnxManagerlDMiFqb.removeBearer.call(addresshNeIH24, uintpgOXoB, {from: accounts[4]});
		await vnxManagerlDMiFqb.onlyOwner.call({from: accounts[3]});
		const uint256XL8vXtg = await vnxManagerlDMiFqb.totalRoles.call({from: accounts[3]});
		const booliBjh3bb = await vnxManagerlDMiFqb.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressgtt5xs9 = await vnxManagerlDMiFqb.removeBearer.call(addressxDXD8pL, uintVEw3Akk, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerVaNKx13 = await vnxManager.new({from: accounts[1]});
		const uintguYHryI = BigInt("1012")
		const addressfguOHRs = accounts[1]
		const uintfS1ktNh = BigInt("1072")
		const addresspv8KDME = accounts[6]
		const uintb4TE81F = BigInt("1458")
		const stringmyzBor = "pXDnVVCXUx2YYIzWAMBKdmaNAKPL8lH3pvz6MnE9jp3grFGNMv"
		const uintPWxmcal = BigInt("1462")
		const stringgZ6cjrX = "5l2Sdc4EEl4JRGkemRQu42wwi7EwHR2UoEV9RE3yVqctu6fpwQKHtCfrWUxVbktc"
		const boolkG0NZ4T = await vnxManagerVaNKx13.hasRole.call(addressfguOHRs, uintguYHryI, {from: accounts[4]});
		const addressw8UvMM = await vnxManagerVaNKx13.owner.call({from: accounts[0]});
		const addressZwOIffw = await vnxManagerVaNKx13.addBearer.call(addresspv8KDME, uintfS1ktNh, {from: accounts[0]});
		const uint2561usu0V = await vnxManagerVaNKx13.addRole.call(stringmyzBor, uintb4TE81F, {from: accounts[4]});
		const uint256N5NSBHM = await vnxManagerVaNKx13.addRole.call(stringgZ6cjrX, uintPWxmcal, {from: accounts[5]});
		await vnxManagerVaNKx13.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerVaNKx13.renounceOwnership.call({from: accounts[3]});
		await vnxManagerVaNKx13.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressw8UvMM, 0x66E6a59267e9B316a0088bdFEC2BDa9A0Ddd1Df2)
		assert.equal(boolkG0NZ4T, false)
		await expect(vnxManagerVaNKx13.addBearer.call(addresspv8KDME, uintfS1ktNh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlKd6iNW = await vnxManager.new({from: accounts[2]});
		const addressgETrBUA = accounts[3]
		const addressFgMvKNO = accounts[4]
		const uintybyPpQQ = BigInt("70")
		const addressFrHcf9l = accounts[4]
		const boolQo6ZvB5 = await vnxManagerlKd6iNW.transferContractOwnership.call(addressFgMvKNO, addressgETrBUA, {from: accounts[2]});
		const addressT5ZLAph = await vnxManagerlKd6iNW.addBearer.call(addressFrHcf9l, uintybyPpQQ, {from: accounts[1]});

		await expect(vnxManagerlKd6iNW.transferContractOwnership.call(addressFgMvKNO, addressgETrBUA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlKd6iNW = await vnxManager.new({from: accounts[2]});
		const uintOViwkz1 = BigInt("1360")
		const addressqPICKj = accounts[4]
		await vnxManagerlKd6iNW.renounceOwnership.call({from: accounts[2]});
		const addressEQf0LF = await vnxManagerlKd6iNW.removeBearer.call(addressqPICKj, uintOViwkz1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerlKd6iNW.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerPfXdN7k = await vnxManager.new({from: accounts[4]});
		const addressWWRU55O = accounts[0]
		const uintFN5fXDP = BigInt("1928")
		const stringNou2pw0 = "CyLUGH7OcDxcuICDuTByu4VN4mhdigtKMPaLtjU63vw5XBAlsascBDPpcvewg"
		const addressDEBs6MK = await vnxManagerPfXdN7k.transferOwnership.call(addressWWRU55O, {from: accounts[4]});
		const uint256Tm4IxeH = await vnxManagerPfXdN7k.addRole.call(stringNou2pw0, uintFN5fXDP, {from: accounts[1]});
		await vnxManagerPfXdN7k.onlyAdmin.call({from: accounts[1]});

		await expect(vnxManagerPfXdN7k.addRole.call(stringNou2pw0, uintFN5fXDP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageruqQNGIz = await vnxManager.new({from: accounts[2]});
		const addressf7cyiGW = "0x0000000000000000000000000000000000000000"
		const addresstro8aDl = accounts[3]
		const boolqFLXQkb = await vnxManageruqQNGIz.transferContractOwnership.call(addresstro8aDl, addressf7cyiGW, {from: accounts[2]});
		const boolfDHWqOr = await vnxManageruqQNGIz.isOwner.call({from: accounts[0]});

		await expect(vnxManageruqQNGIz.transferContractOwnership.call(addresstro8aDl, addressf7cyiGW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})