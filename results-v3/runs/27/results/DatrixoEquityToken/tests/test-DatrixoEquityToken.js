const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addresseFv3m4C = accounts[1]
		const uintyUCuSiQ = BigInt("626")
		const DatrixoEquityTokenXecDqtC = await DatrixoEquityToken.new(addresseFv3m4C, uintyUCuSiQ, {from: accounts[0]});
		const addressHlZPjgN = accounts[0]
		await DatrixoEquityTokenXecDqtC.onlyOwner.call({from: accounts[3]});
		const addressarrayXDFs4q = await DatrixoEquityTokenXecDqtC.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHNU0f9P = await DatrixoEquityTokenXecDqtC.removeShareholder.call(addressHlZPjgN, {from: accounts[3]});

		await expect(DatrixoEquityTokenXecDqtC.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqgO6w9J = accounts[1]
		const uintgP4Vo8R = BigInt("56")
		const DatrixoEquityTokenvf6p81A = await DatrixoEquityToken.new(addressqgO6w9J, uintgP4Vo8R, {from: accounts[1]});
		const uinteP8WLw7 = BigInt("330")
		const addressbyG3Yn3 = accounts[4]
		const addressBqMmjCD = accounts[2]
		const uintnVzYV0w = BigInt("2016")
		const addressWRb3cZe = accounts[4]
		const addressudixISj = accounts[1]
		const boolRp3ykvE = await DatrixoEquityTokenvf6p81A.transfer.call(addressbyG3Yn3, uinteP8WLw7, {from: accounts[0]});
		const booln4S5VIB = await DatrixoEquityTokenvf6p81A.removeShareholder.call(addressBqMmjCD, {from: accounts[3]});
		const bool0GsZN3 = await DatrixoEquityTokenvf6p81A.transferFrom.call(addressudixISj, addressWRb3cZe, uintnVzYV0w, {from: accounts[4]});

		await expect(DatrixoEquityTokenvf6p81A.transfer.call(addressbyG3Yn3, uinteP8WLw7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXRdjlVH = accounts[3]
		const uintdIHdfnd = BigInt("1357")
		const DatrixoEquityTokenPqsH0g7 = await DatrixoEquityToken.new(addressXRdjlVH, uintdIHdfnd, {from: "0x0000000000000000000000000000000000000001"});
		const addressMqhR2ES = accounts[2]
		const uintIvpl7kv = BigInt("319")
		const addresssQSSuYq = accounts[2]
		const uintLXKtKSx = BigInt("503")
		const addressFtvDkox = "0x0000000000000000000000000000000000000001"
		const boolAh9qU7w = await DatrixoEquityTokenPqsH0g7.removeShareholder.call(addressMqhR2ES, {from: accounts[4]});
		const boolq52jn1Q = await DatrixoEquityTokenPqsH0g7.transfer.call(addresssQSSuYq, uintIvpl7kv, {from: accounts[2]});
		const addressarrayKiabmYR = await DatrixoEquityTokenPqsH0g7.getShareholdersArray.call({from: accounts[3]});
		const boolrJ3vxFA = await DatrixoEquityTokenPqsH0g7.transfer.call(addressFtvDkox, uintLXKtKSx, {from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressH1ootdY = accounts[0]
		const uintjlslrPr = BigInt("1436")
		const DatrixoEquityTokenWHTzK42 = await DatrixoEquityToken.new(addressH1ootdY, uintjlslrPr, {from: accounts[0]});
		const addressnbMANdd = "0x0000000000000000000000000000000000000001"
		const uintsnjJF4V = BigInt("1221")
		const addressxXpCfEx = accounts[0]
		const addressVGOMPPB = accounts[0]
		const boollkXUk1U = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressnbMANdd, {from: accounts[0]});
		const boolGn7Bk5O = await DatrixoEquityTokenWHTzK42.transfer.call(addressxXpCfEx, uintsnjJF4V, {from: accounts[5]});
		const booliGMDZ4J = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressVGOMPPB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenWHTzK42.removeShareholder.call(addressnbMANdd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaBGrCrG = accounts[3]
		const uintrAfBpv = BigInt("396")
		const DatrixoEquityTokenCL1E7q = await DatrixoEquityToken.new(addressaBGrCrG, uintrAfBpv, {from: accounts[2]});
		const addressh8mcHd = accounts[1]
		const uintDvcqHXi = BigInt("1686")
		const addressiKWYTQv = accounts[5]
		const addressarrayiI73xBn = await DatrixoEquityTokenCL1E7q.getShareholdersArray.call({from: accounts[2]});
		const boolnjQ0nJq = await DatrixoEquityTokenCL1E7q.removeShareholder.call(addressh8mcHd, {from: accounts[5]});
		const boolZSkFoMt = await DatrixoEquityTokenCL1E7q.transfer.call(addressiKWYTQv, uintDvcqHXi, {from: accounts[4]});

		assert.equal(addressarrayiI73xBn, )
		await expect(DatrixoEquityTokenCL1E7q.removeShareholder.call(addressh8mcHd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPekiY9 = accounts[1]
		const uintiynWwe = BigInt("56")
		const DatrixoEquityTokenvf6p81A = await DatrixoEquityToken.new(addressPekiY9, uintiynWwe, {from: accounts[1]});
		const uintYbe3yRY = BigInt("1671")
		const address7a9N0i = accounts[0]
		const addresshs4vLt = accounts[4]
		const uintXNFF1qj = BigInt("330")
		const addressvpdXp2J = accounts[4]
		const uintTTK2tr = BigInt("2016")
		const addresszO8EnEe = accounts[2]
		const addressgVWLlZp = accounts[2]
		const boolGuh1PPK = await DatrixoEquityTokenvf6p81A.transferFrom.call(addresshs4vLt, address7a9N0i, uintYbe3yRY, {from: accounts[1]});
		const boolRp3ykvE = await DatrixoEquityTokenvf6p81A.transfer.call(addressvpdXp2J, uintXNFF1qj, {from: accounts[0]});
		const bool0GsZN3 = await DatrixoEquityTokenvf6p81A.transferFrom.call(addressgVWLlZp, addresszO8EnEe, uintTTK2tr, {from: accounts[4]});

		await expect(DatrixoEquityTokenvf6p81A.transferFrom.call(addresshs4vLt, address7a9N0i, uintYbe3yRY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHS0ilAE = accounts[0]
		const uintJ21mCuh = BigInt("1436")
		const DatrixoEquityTokenWHTzK42 = await DatrixoEquityToken.new(addressHS0ilAE, uintJ21mCuh, {from: accounts[0]});
		const addresszubYlXN = "0x0000000000000000000000000000000000000000"
		const uintRMVJL3G = BigInt("1221")
		const addresswidPlp4 = accounts[0]
		const uintqOYdWPC = BigInt("1630")
		const addressO86xSnH = accounts[3]
		const addressuyooQLS = accounts[0]
		const boollkXUk1U = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addresszubYlXN, {from: accounts[0]});
		const boolGn7Bk5O = await DatrixoEquityTokenWHTzK42.transfer.call(addresswidPlp4, uintRMVJL3G, {from: accounts[5]});
		const booldI7AkPj = await DatrixoEquityTokenWHTzK42.transfer.call(addressO86xSnH, uintqOYdWPC, {from: accounts[3]});
		const booliGMDZ4J = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressuyooQLS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenWHTzK42.removeShareholder.call(addresszubYlXN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresstAfe989 = accounts[1]
		const uintqTlm0E8 = BigInt("56")
		const DatrixoEquityTokenvf6p81A = await DatrixoEquityToken.new(addresstAfe989, uintqTlm0E8, {from: accounts[1]});
		const uintSSZwZPo = BigInt("1671")
		const addressGKxMpkQ = accounts[0]
		const addresscEhKiP = accounts[1]
		const uintCVQcmrC = BigInt("525")
		const uintviV2Qw0 = BigInt("330")
		const addressXitk7Qt = accounts[4]
		const uintaZdZoYG = BigInt("2016")
		const addressSgRLfY = accounts[3]
		const addressmpyIGT = accounts[2]
		const boolGuh1PPK = await DatrixoEquityTokenvf6p81A.transferFrom.call(addresscEhKiP, addressGKxMpkQ, uintSSZwZPo, {from: accounts[1]});
		const uintiEdyrkb = await DatrixoEquityTokenvf6p81A.setStart.call(uintCVQcmrC, {from: accounts[3]});
		const boolRp3ykvE = await DatrixoEquityTokenvf6p81A.transfer.call(addressXitk7Qt, uintviV2Qw0, {from: accounts[0]});
		const bool0GsZN3 = await DatrixoEquityTokenvf6p81A.transferFrom.call(addressmpyIGT, addressSgRLfY, uintaZdZoYG, {from: accounts[4]});

		assert.equal(boolGuh1PPK, true)
		await expect(DatrixoEquityTokenvf6p81A.setStart.call(uintCVQcmrC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressWAzBzNV = accounts[0]
		const uintPgwBJvZ = BigInt("1436")
		const DatrixoEquityTokenWHTzK42 = await DatrixoEquityToken.new(addressWAzBzNV, uintPgwBJvZ, {from: accounts[0]});
		const uintYUI8k6 = BigInt("521")
		const addressfVZT0Qm = "0x0000000000000000000000000000000000000001"
		const uinthCjpYjt = BigInt("1221")
		const addresspZxeipV = accounts[0]
		const addressM8UspA = accounts[0]
		const uintbeYd000 = await DatrixoEquityTokenWHTzK42.setStart.call(uintYUI8k6, {from: accounts[0]});
		const boollkXUk1U = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressfVZT0Qm, {from: accounts[0]});
		const boolGn7Bk5O = await DatrixoEquityTokenWHTzK42.transfer.call(addresspZxeipV, uinthCjpYjt, {from: accounts[5]});
		const booliGMDZ4J = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressM8UspA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenWHTzK42.removeShareholder.call(addressfVZT0Qm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressG0m39dF = accounts[0]
		const uintDrXZgZe = BigInt("1436")
		const DatrixoEquityTokenWHTzK42 = await DatrixoEquityToken.new(addressG0m39dF, uintDrXZgZe, {from: accounts[0]});
		const uintNPNMDEJ = BigInt("1381")
		const addressxe1hiEm = accounts[5]
		const addresscWNSJyb = "0x0000000000000000000000000000000000000001"
		const boolEIJraXE = await DatrixoEquityTokenWHTzK42.transfer.call(addressxe1hiEm, uintNPNMDEJ, {from: accounts[0]});
		const boollkXUk1U = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addresscWNSJyb, {from: accounts[0]});
		const addressarray1Xab1Z = await DatrixoEquityTokenWHTzK42.getShareholdersArray.call({from: accounts[1]});

		assert.equal(boolEIJraXE, true)
		await expect(DatrixoEquityTokenWHTzK42.removeShareholder.call(addresscWNSJyb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshVS9GZN = accounts[1]
		const uintINGeYWi = BigInt("56")
		const DatrixoEquityTokenvf6p81A = await DatrixoEquityToken.new(addresshVS9GZN, uintINGeYWi, {from: accounts[1]});
		const uintuwpK4E = BigInt("1671")
		const addressPnfD9OI = accounts[0]
		const addressCsoNLmh = accounts[1]
		const uintVfsj85W = BigInt("1625")
		const uintB03FOPc = BigInt("330")
		const addressuqQA2lO = accounts[5]
		const boolGuh1PPK = await DatrixoEquityTokenvf6p81A.transferFrom.call(addressCsoNLmh, addressPnfD9OI, uintuwpK4E, {from: accounts[1]});
		const uintPRuUfHR = await DatrixoEquityTokenvf6p81A.setStart.call(uintVfsj85W, {from: accounts[1]});
		const addressarraydvRzk1 = await DatrixoEquityTokenvf6p81A.getShareholdersArray.call({from: accounts[3]});
		const boolRp3ykvE = await DatrixoEquityTokenvf6p81A.transfer.call(addressuqQA2lO, uintB03FOPc, {from: accounts[0]});

		assert.equal(boolGuh1PPK, true)
		await expect(DatrixoEquityTokenvf6p81A.setStart.call(uintVfsj85W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address03pmpS = accounts[0]
		const uintSTuJGQX = BigInt("1436")
		const DatrixoEquityTokenWHTzK42 = await DatrixoEquityToken.new(address03pmpS, uintSTuJGQX, {from: accounts[0]});
		const uintXBn9yoE = BigInt("1840")
		const addressnJQuRzz = accounts[0]
		const addressEbZLVr = "0x0000000000000000000000000000000000000001"
		const boolYPDrgSx = await DatrixoEquityTokenWHTzK42.transfer.call(addressnJQuRzz, uintXBn9yoE, {from: accounts[0]});
		const boollkXUk1U = await DatrixoEquityTokenWHTzK42.removeShareholder.call(addressEbZLVr, {from: accounts[0]});

		await expect(DatrixoEquityTokenWHTzK42.transfer.call(addressnJQuRzz, uintXBn9yoE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})