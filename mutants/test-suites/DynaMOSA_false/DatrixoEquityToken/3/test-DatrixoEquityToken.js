const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressncGlm9X = accounts[2]
		const uintEx7Dv2u = BigInt("1523")
		const DatrixoEquityTokenPrUYW43 = await DatrixoEquityToken.new(addressncGlm9X, uintEx7Dv2u, {from: "0x0000000000000000000000000000000000000001"});
		const addresshtF0JCd = accounts[1]
		const uintezWXgUK = BigInt("1882")
		const addressiNF2Ywx = accounts[1]
		const addressz8AVEQE = accounts[4]
		const uintS6iIX0M = BigInt("92")
		const addressl2gWERv = accounts[1]
		const boolxdVxiBn = await DatrixoEquityTokenPrUYW43.removeShareholder.call(addresshtF0JCd, {from: accounts[0]});
		await DatrixoEquityTokenPrUYW43.afterStartTime.call({from: accounts[2]});
		await DatrixoEquityTokenPrUYW43.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayK0eQtJp = await DatrixoEquityTokenPrUYW43.getShareholdersArray.call({from: accounts[2]});
		const boolovAxh5O = await DatrixoEquityTokenPrUYW43.transferFrom.call(addressz8AVEQE, addressiNF2Ywx, uintezWXgUK, {from: accounts[0]});
		const boolAESewAR = await DatrixoEquityTokenPrUYW43.transfer.call(addressl2gWERv, uintS6iIX0M, {from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressv1pCpR = accounts[4]
		const uintbJsc79 = BigInt("1055")
		const DatrixoEquityTokenFGxrDkL = await DatrixoEquityToken.new(addressv1pCpR, uintbJsc79, {from: accounts[1]});
		const uintq1kik0c = BigInt("992")
		const uintUj6GLWn = BigInt("1808")
		const addressEvo2t8y = accounts[3]
//		const uintNKcUVbu = await DatrixoEquityTokenFGxrDkL.setStart.call(uintq1kik0c, {from: accounts[1]});
//		const uintaqnP7Kw = await DatrixoEquityTokenFGxrDkL.setStart.call(uintUj6GLWn, {from: accounts[3]});
//		const boolS29FVW = await DatrixoEquityTokenFGxrDkL.removeShareholder.call(addressEvo2t8y, {from: accounts[3]});

		await expect(DatrixoEquityTokenFGxrDkL.setStart.call(uintq1kik0c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszwmYVw = accounts[2]
		const uintRlwksb5 = BigInt("815")
		const DatrixoEquityTokenCab9PPF = await DatrixoEquityToken.new(addresszwmYVw, uintRlwksb5, {from: accounts[0]});
		const addressToU8myv = accounts[0]
		const addressC9VsDDb = accounts[2]
//		const bool82TKPy = await DatrixoEquityTokenCab9PPF.removeShareholder.call(addressToU8myv, {from: accounts[2]});
//		const boolOrp3QTj = await DatrixoEquityTokenCab9PPF.removeShareholder.call(addressC9VsDDb, {from: accounts[2]});
//		await DatrixoEquityTokenCab9PPF.afterStartTime.call({from: accounts[0]});

		await expect(DatrixoEquityTokenCab9PPF.removeShareholder.call(addressToU8myv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressKtKgyQU = accounts[1]
		const uintaHO2tJt = BigInt("806")
		const DatrixoEquityTokenSU7uF4M = await DatrixoEquityToken.new(addressKtKgyQU, uintaHO2tJt, {from: accounts[0]});
		const uintpY0Q5ku = BigInt("1028")
		const addressjvEtyR3 = accounts[0]
		const addressfXz5gLQ = accounts[4]
		const boolS3ta8LD = await DatrixoEquityTokenSU7uF4M.transfer.call(addressjvEtyR3, uintpY0Q5ku, {from: accounts[1]});
		const addressarrayLnMtFE4 = await DatrixoEquityTokenSU7uF4M.getShareholdersArray.call({from: accounts[5]});
//		const boolGhDQpQz = await DatrixoEquityTokenSU7uF4M.removeShareholder.call(addressfXz5gLQ, {from: accounts[4]});

		assert.equal(addressarrayLnMtFE4, )
		assert.equal(boolS3ta8LD, true)
		await expect(DatrixoEquityTokenSU7uF4M.removeShareholder.call(addressfXz5gLQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgLu8rKx = accounts[0]
		const uintYoyJGk = BigInt("390")
		const DatrixoEquityTokenXs8aVJk = await DatrixoEquityToken.new(addressgLu8rKx, uintYoyJGk, {from: accounts[2]});
		const uintYXXndR9 = BigInt("1793")
		const addressiEkpE16 = accounts[3]
		const addressQLO6Ctl = accounts[2]
		const uintw24Pv5a = BigInt("1398")
//		await DatrixoEquityTokenXs8aVJk.afterStartTime.call({from: accounts[4]});
//		const boolgWlRyZx = await DatrixoEquityTokenXs8aVJk.transferFrom.call(addressQLO6Ctl, addressiEkpE16, uintYXXndR9, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenXs8aVJk.afterStartTime.call({from: accounts[5]});
//		const uintQ2MsafU = await DatrixoEquityTokenXs8aVJk.setStart.call(uintw24Pv5a, {from: accounts[0]});

		await expect(DatrixoEquityTokenXs8aVJk.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTTmSPiI = accounts[2]
		const uintFlxbpMU = BigInt("815")
		const DatrixoEquityTokenCab9PPF = await DatrixoEquityToken.new(addressTTmSPiI, uintFlxbpMU, {from: accounts[0]});
		const uint0YjOQY = BigInt("1075")
		const addressIAM3m1V = accounts[2]
		const addressTlDL3vu = accounts[5]
		const addressP8HNtv = accounts[2]
//		const boolJEnK4CP = await DatrixoEquityTokenCab9PPF.transferFrom.call(addressTlDL3vu, addressIAM3m1V, uint0YjOQY, {from: accounts[2]});
//		const bool82TKPy = await DatrixoEquityTokenCab9PPF.removeShareholder.call(addressP8HNtv, {from: accounts[2]});
//		await DatrixoEquityTokenCab9PPF.onlyOwner.call({from: accounts[2]});

		await expect(DatrixoEquityTokenCab9PPF.transferFrom.call(addressTlDL3vu, addressIAM3m1V, uint0YjOQY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressyT4s9gs = accounts[2]
		const uinte2SCnGq = BigInt("815")
		const DatrixoEquityTokenCab9PPF = await DatrixoEquityToken.new(addressyT4s9gs, uinte2SCnGq, {from: accounts[0]});
		const uintqh1ud4 = BigInt("1166")
		const addressmLRh7a = "0x0000000000000000000000000000000000000001"
		const addressyFkoc2Y = accounts[2]
		const addresscpzHp0Y = accounts[1]
		const boolRGbpej = await DatrixoEquityTokenCab9PPF.transferFrom.call(addressyFkoc2Y, addressmLRh7a, uintqh1ud4, {from: accounts[2]});
//		const bool82TKPy = await DatrixoEquityTokenCab9PPF.removeShareholder.call(addresscpzHp0Y, {from: accounts[2]});
//		await DatrixoEquityTokenCab9PPF.onlyOwner.call({from: accounts[0]});
//		await DatrixoEquityTokenCab9PPF.afterStartTime.call({from: accounts[4]});
//		await DatrixoEquityTokenCab9PPF.afterStartTime.call({from: accounts[0]});

		assert.equal(boolRGbpej, true)
		await expect(DatrixoEquityTokenCab9PPF.removeShareholder.call(addresscpzHp0Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressvk2oU0C = accounts[2]
		const uintxwZErFN = BigInt("901")
		const DatrixoEquityTokenChj4US = await DatrixoEquityToken.new(addressvk2oU0C, uintxwZErFN, {from: accounts[4]});
		const uintcNf6McA = BigInt("1440")
		const addressDkC2hKn = accounts[1]
//		const uintlJ7ukyz = await DatrixoEquityTokenChj4US.setStart.call(uintcNf6McA, {from: accounts[2]});
//		const boolyphXhp3 = await DatrixoEquityTokenChj4US.removeShareholder.call(addressDkC2hKn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenChj4US.setStart.call(uintcNf6McA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressGxUW3cO = accounts[2]
		const uintlfiDXM = BigInt("815")
		const DatrixoEquityTokenCab9PPF = await DatrixoEquityToken.new(addressGxUW3cO, uintlfiDXM, {from: accounts[0]});
		const uintQ5bg2T = BigInt("1166")
		const addressS7Sm77H = "0x00000000000000000000000000000000000000-1"
		const addressdCSzwsj = accounts[2]
		const uintatbBsZ = BigInt("1673")
		const addressRABZu9P = accounts[2]
		const addressscZOhBJ = accounts[4]
//		const boolRGbpej = await DatrixoEquityTokenCab9PPF.transferFrom.call(addressdCSzwsj, addressS7Sm77H, uintQ5bg2T, {from: accounts[2]});
//		const boolsRzsKQ1 = await DatrixoEquityTokenCab9PPF.transferFrom.call(addressscZOhBJ, addressRABZu9P, uintatbBsZ, {from: accounts[0]});

		await expect(DatrixoEquityTokenCab9PPF.transferFrom.call(addressdCSzwsj, addressS7Sm77H, uintQ5bg2T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspDlRudf = accounts[2]
		const uintuz8wDOl = BigInt("815")
		const DatrixoEquityTokenCab9PPF = await DatrixoEquityToken.new(addresspDlRudf, uintuz8wDOl, {from: accounts[0]});
		const uintmJtCEx = BigInt("1608")
		const address3JxNuf = accounts[2]
		const addressDLaKKTE = accounts[1]
//		const boolvKrRcKi = await DatrixoEquityTokenCab9PPF.transfer.call(address3JxNuf, uintmJtCEx, {from: accounts[2]});
//		const bool82TKPy = await DatrixoEquityTokenCab9PPF.removeShareholder.call(addressDLaKKTE, {from: accounts[2]});

		await expect(DatrixoEquityTokenCab9PPF.transfer.call(address3JxNuf, uintmJtCEx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})