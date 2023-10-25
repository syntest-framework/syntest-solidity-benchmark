const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenXC1ve5B = await MIMOToken.new({from: accounts[4]});
		const uintdPbBlTN = BigInt("84")
		const addressq72eT7w = accounts[0]
		const uintamwWpCp = BigInt("46")
		const uintwB62jV6 = BigInt("692")
		const addressnSBu095 = accounts[0]
		const boolXQgjS1p = await MIMOTokenXC1ve5B.approve.call(addressq72eT7w, uintdPbBlTN, {from: accounts[1]});
		const uint256EYGeGiM = await MIMOTokenXC1ve5B.setFeeRate.call(uintamwWpCp, {from: accounts[2]});
		const bool5vY7NI = await MIMOTokenXC1ve5B.approve.call(addressnSBu095, uintwB62jV6, {from: accounts[2]});
		const uintrTR4yp8 = await MIMOTokenXC1ve5B.totalSupply.call({from: accounts[1]});

		assert.equal(bool5vY7NI, true)
		assert.equal(boolXQgjS1p, true)
		assert.equal(uintrTR4yp8, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenLQs5eRU = await MIMOToken.new({from: accounts[1]});
		const uintm7er7ba = BigInt("1093")
		const uintSgu33mq = BigInt("1535")
		const addressuETJGc3 = accounts[1]
		const uintOdb0DL = BigInt("1940")
		const addressOCk5WvA = accounts[4]
		const uint256DsYjoRJ = await MIMOTokenLQs5eRU.setFeeRate.call(uintm7er7ba, {from: accounts[1]});
		const boolasun649 = await MIMOTokenLQs5eRU.transfer.call(addressuETJGc3, uintSgu33mq, {from: accounts[4]});
		const boolMs1Dntz = await MIMOTokenLQs5eRU.transfer.call(addressOCk5WvA, uintOdb0DL, {from: accounts[1]});

		await expect(MIMOTokenLQs5eRU.transfer.call(addressuETJGc3, uintSgu33mq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJkVlshV = await MIMOToken.new({from: accounts[5]});
		const uintD1gL2wk = BigInt("1220")
		const uintyWT9qA = BigInt("775")
		const addressDhVyQQ4 = accounts[1]
		const uintEPkZmn = BigInt("628")
		const addressOTfYZAg = accounts[1]
		const addressz3nPwrJ = accounts[1]
		const uint256uIwbVNe = await MIMOTokenJkVlshV.setMinFee.call(uintD1gL2wk, {from: accounts[3]});
		const uint256cLOSkAQ = await MIMOTokenJkVlshV.getFee.call(uintyWT9qA, {from: accounts[4]});
		const uintssKpaft = await MIMOTokenJkVlshV.balanceOf.call(addressDhVyQQ4, {from: "0x0000000000000000000000000000000000000001"});
		const boold5qsxSa = await MIMOTokenJkVlshV.transferFrom.call(addressz3nPwrJ, addressOTfYZAg, uintEPkZmn, {from: accounts[0]});
		const uintb5rxEhq = await MIMOTokenJkVlshV.totalSupply.call({from: accounts[2]});

		assert.equal(uint256cLOSkAQ, BigInt("50000000000000000"))
		assert.equal(uintssKpaft, BigInt("0"))
		await expect(MIMOTokenJkVlshV.transferFrom.call(addressz3nPwrJ, addressOTfYZAg, uintEPkZmn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenkdLZizg = await MIMOToken.new({from: accounts[4]});
		const uintUi7aBpX = BigInt("1806")
		const addressnl7DXoa = accounts[2]
		const addresscAyJrpf = accounts[0]
		const uintzGfswts = BigInt("1830")
		const uintDVEHrjQ = BigInt("44")
		const uint256HK7i8v0 = await MIMOTokenkdLZizg.setMinFee.call(uintUi7aBpX, {from: accounts[5]});
		const uintMLPsiz6 = await MIMOTokenkdLZizg.allowance.call(addresscAyJrpf, addressnl7DXoa, {from: accounts[4]});
		const uint256SdWgyZC = await MIMOTokenkdLZizg.setMinFee.call(uintzGfswts, {from: accounts[1]});
		const uint256S1bqTv = await MIMOTokenkdLZizg.setMinFee.call(uintDVEHrjQ, {from: accounts[2]});

		assert.equal(uintMLPsiz6, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjanB3o = await MIMOToken.new({from: accounts[1]});
		const uintxVaof87 = BigInt("164")
		const addressyT7fEU5 = "0x0000000000000000000000000000000000000000"
		const addresseyJXm2X = accounts[1]
		const booleeDiYEG = await MIMOTokenjanB3o.transferFrom.call(addresseyJXm2X, addressyT7fEU5, uintxVaof87, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MIMOTokenjanB3o.transferFrom.call(addresseyJXm2X, addressyT7fEU5, uintxVaof87, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenwZzPMI = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintanTpww = BigInt("195")
		const addresskJo3xt9 = accounts[1]
		const addressyZ2FKun = accounts[1]
		const addressEpUh948 = "0x0000000000000000000000000000000000000001"
		const boolvXlgsgT = await MIMOTokenwZzPMI.transferFrom.call(addressyZ2FKun, addresskJo3xt9, uintanTpww, {from: accounts[3]});
		const uintdnXyzrz = await MIMOTokenwZzPMI.balanceOf.call(addressEpUh948, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjanB3o = await MIMOToken.new({from: accounts[1]});
		const uintgoQp2ch = BigInt("56")
		const addressVhYosP9 = "0x0000000000000000000000000000000000000000"
		const boolBL45mpV = await MIMOTokenjanB3o.approve.call(addressVhYosP9, uintgoQp2ch, {from: accounts[2]});

		await expect(MIMOTokenjanB3o.approve.call(addressVhYosP9, uintgoQp2ch, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})