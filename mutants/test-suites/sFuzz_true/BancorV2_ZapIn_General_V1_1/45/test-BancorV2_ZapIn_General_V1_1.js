const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHaPSrwz = BigInt("1496")
		const BancorV2_ZapIn_General_V1_1YaWNm7W = await BancorV2_ZapIn_General_V1_1.new(uintHaPSrwz, {from: accounts[1]});
		const addressjIEvsNU = accounts[4]
//		const addresshOuEPwO = await BancorV2_ZapIn_General_V1_1YaWNm7W.transferOwnership.call(addressjIEvsNU, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1YaWNm7W.nonReentrant.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1YaWNm7W.nonReentrant.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YaWNm7W.transferOwnership.call(addressjIEvsNU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintIOq5Xrx = BigInt("2016")
		const BancorV2_ZapIn_General_V1_1lUFY534 = await BancorV2_ZapIn_General_V1_1.new(uintIOq5Xrx, {from: accounts[2]});
		const addressFHKcsyq = accounts[0]
		const addressLJow06 = accounts[1]
		const boolxTsq0qw = await BancorV2_ZapIn_General_V1_1lUFY534.isOwner.call({from: accounts[1]});
//		const address3PYaAo = await BancorV2_ZapIn_General_V1_1lUFY534.toPayable.call(addressFHKcsyq, {from: accounts[0]});
//		const addressEQvB1tI = await BancorV2_ZapIn_General_V1_1lUFY534.transferOwnership.call(addressLJow06, {from: accounts[4]});

		assert.equal(boolxTsq0qw, false)
		await expect(BancorV2_ZapIn_General_V1_1lUFY534.toPayable.call(addressFHKcsyq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXTsNGe = BigInt("76")
		const BancorV2_ZapIn_General_V1_1FjfACKp = await BancorV2_ZapIn_General_V1_1.new(uintXTsNGe, {from: accounts[4]});
		const byteZs2Sydm = "0x081f"
		const addressaOBDCrG = accounts[5]
		const addressz4bqNVE = accounts[1]
		const uinttMV77vZ = BigInt("785")
		const uintWHF5cfs = BigInt("281")
		const addressNZQkSfo = "0x0000000000000000000000000000000000000001"
		const addressXI2Hop4 = accounts[2]
		const addressdNsQlbb = accounts[4]
		const uintTUxNHG = BigInt("1824")
		const addresssgx6l6T = accounts[0]
//		const uint256k1QqhSc = await BancorV2_ZapIn_General_V1_1FjfACKp.ZapInSingleSided.call(addressdNsQlbb, addressXI2Hop4, addressNZQkSfo, uintWHF5cfs, uinttMV77vZ, addressz4bqNVE, addressaOBDCrG, byteZs2Sydm, {from: accounts[0]});
//		const uint16xVMPvfn = await BancorV2_ZapIn_General_V1_1FjfACKp.set_new_goodwill.call(uintTUxNHG, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1FjfACKp.toggleContractActive.call({from: accounts[5]});
//		const addresswP1Nktk = await BancorV2_ZapIn_General_V1_1FjfACKp.inCaseTokengetsStuck.call(addresssgx6l6T, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1FjfACKp.ZapInSingleSided.call(addressdNsQlbb, addressXI2Hop4, addressNZQkSfo, uintWHF5cfs, uinttMV77vZ, addressz4bqNVE, addressaOBDCrG, byteZs2Sydm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint7xlMTT = BigInt("169")
		const BancorV2_ZapIn_General_V1_1OyBCMP = await BancorV2_ZapIn_General_V1_1.new(uint7xlMTT, {from: "0x0000000000000000000000000000000000000001"});
		const addressEgUJdpB = accounts[4]
		const addressMIf3MY = await BancorV2_ZapIn_General_V1_1OyBCMP.transferOwnership.call(addressEgUJdpB, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1OyBCMP.nonReentrant.call({from: accounts[2]});
		const addressdvsB1Y = await BancorV2_ZapIn_General_V1_1OyBCMP.owner.call({from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZRPcsy1 = BigInt("631")
		const BancorV2_ZapIn_General_V1_1sJ6boh = await BancorV2_ZapIn_General_V1_1.new(uintZRPcsy1, {from: accounts[3]});
		const uintPL6baTy = BigInt("735")
		const addressvCM6jG1 = accounts[4]
		const uint16TvIpUCP = await BancorV2_ZapIn_General_V1_1sJ6boh.set_new_goodwill.call(uintPL6baTy, {from: accounts[3]});
//		const addressAVmnOi5 = await BancorV2_ZapIn_General_V1_1sJ6boh.transferOwnership.call(addressvCM6jG1, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1sJ6boh.transferOwnership.call(addressvCM6jG1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMCCgnNf = BigInt("1696")
		const BancorV2_ZapIn_General_V1_1M3zPN3I = await BancorV2_ZapIn_General_V1_1.new(uintMCCgnNf, {from: accounts[2]});
		const uinthyNHf9D = BigInt("1194")
//		await BancorV2_ZapIn_General_V1_1M3zPN3I.renounceOwnership.call({from: accounts[2]});
//		const uint16wNDeYQt = await BancorV2_ZapIn_General_V1_1M3zPN3I.set_new_goodwill.call(uinthyNHf9D, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1M3zPN3I.toggleContractActive.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1M3zPN3I.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintg3AmgcR = BigInt("1146")
		const BancorV2_ZapIn_General_V1_1d0ufTJo = await BancorV2_ZapIn_General_V1_1.new(uintg3AmgcR, {from: accounts[4]});
		const addressEzzRhrE = await BancorV2_ZapIn_General_V1_1d0ufTJo.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1d0ufTJo.nonReentrant.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1d0ufTJo.onlyOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1d0ufTJo.renounceOwnership.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1d0ufTJo.withdraw.call({from: accounts[0]});

		assert.equal(addressEzzRhrE, 0x8de8ab1DD2E10aEfC1a39D276aa188DE2b40ED1B)
		await expect(BancorV2_ZapIn_General_V1_1d0ufTJo.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintyJ1S5wE = BigInt("631")
		const BancorV2_ZapIn_General_V1_1sJ6boh = await BancorV2_ZapIn_General_V1_1.new(uintyJ1S5wE, {from: accounts[3]});
		const addresssu4eh17 = accounts[1]
		const uintfuX93ur = BigInt("1726")
//		const addressbHTbysB = await BancorV2_ZapIn_General_V1_1sJ6boh.inCaseTokengetsStuck.call(addresssu4eh17, {from: accounts[3]});
//		const uint16TvIpUCP = await BancorV2_ZapIn_General_V1_1sJ6boh.set_new_goodwill.call(uintfuX93ur, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1sJ6boh.inCaseTokengetsStuck.call(addresssu4eh17, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintP9uppkO = BigInt("76")
		const BancorV2_ZapIn_General_V1_1FjfACKp = await BancorV2_ZapIn_General_V1_1.new(uintP9uppkO, {from: accounts[4]});
		const byteFVAYcmn = "0x081f"
		const addressQAIvu0q = accounts[5]
		const addressCYBu4c4 = accounts[1]
		const uintSRQmUKb = BigInt("785")
		const uintjYevva = BigInt("281")
		const addressH83Ffbx = "0x0000000000000000000000000000000000000001"
		const addressh6Fq82 = accounts[3]
		const addressMOvzH6d = accounts[4]
//		await BancorV2_ZapIn_General_V1_1FjfACKp.withdraw.call({from: accounts[4]});
//		const uint256k1QqhSc = await BancorV2_ZapIn_General_V1_1FjfACKp.ZapInSingleSided.call(addressMOvzH6d, addressh6Fq82, addressH83Ffbx, uintjYevva, uintSRQmUKb, addressCYBu4c4, addressQAIvu0q, byteFVAYcmn, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1FjfACKp.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYlX6lRa = BigInt("76")
		const BancorV2_ZapIn_General_V1_1FjfACKp = await BancorV2_ZapIn_General_V1_1.new(uintYlX6lRa, {from: accounts[4]});
		const addressFl2tfi = "0x0000000000000000000000000000000000000001"
		const byteBIIyCvK = "0x0d1f"
		const addressFEw1eI = accounts[5]
		const addresstDFlK9q = accounts[1]
		const uintsFGwVtM = BigInt("785")
		const uintDF5uze3 = BigInt("281")
		const address59T26r = "0x0000000000000000000000000000000000000001"
		const addressBRUmaQa = accounts[3]
		const addressXHPMWLR = accounts[4]
		const addressNK59b6e = await BancorV2_ZapIn_General_V1_1FjfACKp.transferOwnership.call(addressFl2tfi, {from: accounts[4]});
//		const uint256k1QqhSc = await BancorV2_ZapIn_General_V1_1FjfACKp.ZapInSingleSided.call(addressXHPMWLR, addressBRUmaQa, address59T26r, uintDF5uze3, uintsFGwVtM, addresstDFlK9q, addressFEw1eI, byteBIIyCvK, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1FjfACKp.ZapInSingleSided.call(addressXHPMWLR, addressBRUmaQa, address59T26r, uintDF5uze3, uintsFGwVtM, addresstDFlK9q, addressFEw1eI, byteBIIyCvK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintitVatBK = BigInt("631")
		const BancorV2_ZapIn_General_V1_1sJ6boh = await BancorV2_ZapIn_General_V1_1.new(uintitVatBK, {from: accounts[3]});
		const uintyx70Rdz = BigInt("723")
		const uint16TvIpUCP = await BancorV2_ZapIn_General_V1_1sJ6boh.set_new_goodwill.call(uintyx70Rdz, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1sJ6boh.toggleContractActive.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1sJ6boh.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})