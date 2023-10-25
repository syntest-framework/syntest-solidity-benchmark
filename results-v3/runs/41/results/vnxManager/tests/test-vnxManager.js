const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		await vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]});
		const uint256qBx8sd = await vnxManagerpHxf4n4.totalRoles.call({from: accounts[2]});

		await expect(vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAjUaGKi = await vnxManager.new({from: accounts[1]});
		const uint256A52gdKV = await vnxManagerAjUaGKi.totalRoles.call({from: accounts[1]});
		const uint256dEvgSMT = await vnxManagerAjUaGKi.totalRoles.call({from: accounts[4]});
		await vnxManagerAjUaGKi.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addresskBUoNos = await vnxManagerAjUaGKi.owner.call({from: accounts[5]});
		const boolDhVuA1u = await vnxManagerAjUaGKi.isOwner.call({from: accounts[3]});

		assert.equal(uint256A52gdKV, BigInt("1"))
		assert.equal(uint256dEvgSMT, BigInt("1"))
		await expect(vnxManagerAjUaGKi.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjwfAhoz = await vnxManager.new({from: accounts[2]});
		const uinthvKZsj = BigInt("1993")
		const stringhy3D111 = "mb1oS5ykTvN5kKRAkP1Way2XoBy3YFb04GkIJ1aB4wOnUyR6CI4Tw"
		const stringiVyJiq = "lRVO4hMQgmLdtK538tdeUeAETHPWUDDqmqGw2FOPDdYTx3RoglHA4Hr2RsuXb"
		await vnxManagerjwfAhoz.renounceOwnership.call({from: accounts[0]});
		const uint256qoW0iB8 = await vnxManagerjwfAhoz.addRole.call(stringhy3D111, uinthvKZsj, {from: accounts[0]});
		const uint256uN4l6XO = await vnxManagerjwfAhoz.totalRoles.call({from: accounts[4]});
		const uint256Zkz3kBX = await vnxManagerjwfAhoz.addRootRole.call(stringiVyJiq, {from: accounts[3]});

		await expect(vnxManagerjwfAhoz.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjg3ezL5 = await vnxManager.new({from: accounts[3]});
		const addressCyX8a1q = accounts[2]
		const addressfi4AEwH = accounts[2]
		const stringkTTDspg = "t8YYNScW8PMPaTC0A4pLsmym2jDHW6arflLv0ONq3sEA0EUUK1CxnoRnktGTwSAf"
		const boolJRhsTUS = await vnxManagerjg3ezL5.transferContractOwnership.call(addressfi4AEwH, addressCyX8a1q, {from: accounts[4]});
		const uint2564w3A9y = await vnxManagerjg3ezL5.addRootRole.call(stringkTTDspg, {from: accounts[2]});

		await expect(vnxManagerjg3ezL5.transferContractOwnership.call(addressfi4AEwH, addressCyX8a1q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroZ7ifIp = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHW6FHI = BigInt("1673")
		const stringaXWI8vh = "QCNmXsOhbAFoDBKD6e4mk5LbbUgf0GPwVpcGF6FU9PlEhY25kPyG9Y"
		const addressTXEnBbl = await vnxManageroZ7ifIp.owner.call({from: accounts[4]});
		const uint256VBWtGWg = await vnxManageroZ7ifIp.totalRoles.call({from: accounts[0]});
		const uint256xIfCAgG = await vnxManageroZ7ifIp.addRole.call(stringaXWI8vh, uintHW6FHI, {from: accounts[1]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		const uintVuADiFA = BigInt("1334")
		const addressDLSNB8U = accounts[2]
		const addressqhvbZh3 = await vnxManagerpHxf4n4.addBearer.call(addressDLSNB8U, uintVuADiFA, {from: accounts[1]});
		await vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]});
		const uint256qBx8sd = await vnxManagerpHxf4n4.totalRoles.call({from: accounts[2]});

		await expect(vnxManagerpHxf4n4.addBearer.call(addressDLSNB8U, uintVuADiFA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		const uintUoPUY4Q = BigInt("1151")
		const stringw0zzqS3 = "BLdbFeI1EaurvnKHBAXjHRmqKMlRLa9Dyw2GvgLlV77HnCXzS1lxflhr8v1sq1IAwHiz"
		const uint256qBx8sd = await vnxManagerpHxf4n4.totalRoles.call({from: accounts[2]});
		const uint256jpT5MG6 = await vnxManagerpHxf4n4.addRole.call(stringw0zzqS3, uintUoPUY4Q, {from: accounts[2]});

		assert.equal(uint256qBx8sd, BigInt("1"))
		await expect(vnxManagerpHxf4n4.addRole.call(stringw0zzqS3, uintUoPUY4Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIAN6pEl = await vnxManager.new({from: accounts[0]});
		const uintFWrunyp = BigInt("14")
		const addressA5GfE7f = accounts[0]
		const addressvfy9bUs = await vnxManagerIAN6pEl.removeBearer.call(addressA5GfE7f, uintFWrunyp, {from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerIAN6pEl.onlyOwner.call({from: accounts[3]});

		await expect(vnxManagerIAN6pEl.removeBearer.call(addressA5GfE7f, uintFWrunyp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTFMvjud = await vnxManager.new({from: accounts[0]});
		const addressKDobxgG = await vnxManagerTFMvjud.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOZ4fbuI = await vnxManagerTFMvjud.isOwner.call({from: accounts[2]});

		assert.equal(addressKDobxgG, 0x60e3CaC42B429DAB1501F5EeF6182C2223F0A241)
		assert.equal(boolOZ4fbuI, false)
	});

	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		const uintT5P1fFz = BigInt("243")
		const addressb4LwAAX = accounts[0]
		const uintLhPCxP = BigInt("758")
		const addressgOLEOiG = accounts[5]
		const addresstJQbG60 = "0x0000000000000000000000000000000000000001"
		const addressbpL0KGR = accounts[3]
		await vnxManagerpHxf4n4.renounceOwnership.call({from: accounts[0]});
		const addressGQLmND3 = await vnxManagerpHxf4n4.removeBearer.call(addressb4LwAAX, uintT5P1fFz, {from: accounts[1]});
		const addressq2DtHq = await vnxManagerpHxf4n4.addBearer.call(addressgOLEOiG, uintLhPCxP, {from: "0x0000000000000000000000000000000000000001"});
		const boola5RcJD = await vnxManagerpHxf4n4.transferContractOwnership.call(addressbpL0KGR, addresstJQbG60, {from: accounts[2]});

		await expect(vnxManagerpHxf4n4.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerIAN6pEl = await vnxManager.new({from: accounts[0]});
		const uintiQ9E5vc = BigInt("0")
		const addressF6hjgm = accounts[0]
		const addressvfy9bUs = await vnxManagerIAN6pEl.removeBearer.call(addressF6hjgm, uintiQ9E5vc, {from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerIAN6pEl.onlyOwner.call({from: accounts[3]});

		await expect(vnxManagerIAN6pEl.removeBearer.call(addressF6hjgm, uintiQ9E5vc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		const addressnWR3FNK = accounts[5]
		const addressa3ART5d = await vnxManagerpHxf4n4.transferOwnership.call(addressnWR3FNK, {from: accounts[0]});
		await vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]});
		await vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]});

		await expect(vnxManagerpHxf4n4.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerpHxf4n4 = await vnxManager.new({from: accounts[0]});
		const addresso8N6ndE = accounts[3]
		const addressnOCcWYL = accounts[4]
		const uintcw6UzYx = BigInt("1349")
		const addressmkHhOEt = accounts[2]
		const boolMmTbocV = await vnxManagerpHxf4n4.transferContractOwnership.call(addressnOCcWYL, addresso8N6ndE, {from: accounts[0]});
		const addressqhvbZh3 = await vnxManagerpHxf4n4.addBearer.call(addressmkHhOEt, uintcw6UzYx, {from: accounts[1]});
		const uint256QgqHdfs = await vnxManagerpHxf4n4.totalRoles.call({from: accounts[3]});

		await expect(vnxManagerpHxf4n4.transferContractOwnership.call(addressnOCcWYL, addresso8N6ndE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})