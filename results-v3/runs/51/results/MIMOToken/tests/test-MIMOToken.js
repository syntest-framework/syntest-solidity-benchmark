const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenZiMPJai = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP6ZHlmX = BigInt("1429")
		const addressNce9mcU = accounts[0]
		const uintvfOlUmv = BigInt("323")
		const addressVdHGiQs = "0x0000000000000000000000000000000000000001"
		const boolOgxmyFY = await MIMOTokenZiMPJai.approve.call(addressNce9mcU, uintP6ZHlmX, {from: accounts[3]});
		const boolfILa54D = await MIMOTokenZiMPJai.transfer.call(addressVdHGiQs, uintvfOlUmv, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenakrNAg2 = await MIMOToken.new({from: accounts[2]});
		const addresssNVGTu9 = accounts[3]
		const addressqplaTA6 = accounts[5]
		const addressgKI0juS = accounts[2]
		const uintzc70LSr = BigInt("981")
		const addressAIqUulQ = accounts[2]
		const uintaIuw5b = BigInt("1446")
		const uintevGu2oO = BigInt("391")
		const addressnbzTLv = "0x0000000000000000000000000000000000000001"
		const uinttXBKoJ7 = await MIMOTokenakrNAg2.balanceOf.call(addresssNVGTu9, {from: accounts[5]});
		const uintP4hCFcT = await MIMOTokenakrNAg2.allowance.call(addressgKI0juS, addressqplaTA6, {from: accounts[2]});
		const boolHxWYt97 = await MIMOTokenakrNAg2.transfer.call(addressAIqUulQ, uintzc70LSr, {from: accounts[5]});
		const uint256qPUlhZv = await MIMOTokenakrNAg2.setFeeRate.call(uintaIuw5b, {from: accounts[0]});
		const boolVNqF9lP = await MIMOTokenakrNAg2.transfer.call(addressnbzTLv, uintevGu2oO, {from: accounts[2]});

		assert.equal(uintP4hCFcT, BigInt("0"))
		assert.equal(uinttXBKoJ7, BigInt("0"))
		await expect(MIMOTokenakrNAg2.transfer.call(addressAIqUulQ, uintzc70LSr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenh6j8Gh = await MIMOToken.new({from: accounts[1]});
		const addressuLxdjZ = accounts[4]
		const addressgKVZ6A = accounts[4]
		const uintFEgSXT = BigInt("1251")
		const addressNvVOcJK = accounts[1]
		const address2oI7hZ = accounts[2]
		const addressvV4OVq = accounts[2]
		const uintUclNcLi = BigInt("1573")
		const uintD2JtqLi = await MIMOTokenh6j8Gh.balanceOf.call(addressuLxdjZ, {from: accounts[2]});
		const uintwqsgNFz = await MIMOTokenh6j8Gh.balanceOf.call(addressgKVZ6A, {from: accounts[1]});
		const boolEk9NeaN = await MIMOTokenh6j8Gh.approve.call(addressNvVOcJK, uintFEgSXT, {from: accounts[0]});
		const uintmnEDCGt = await MIMOTokenh6j8Gh.allowance.call(addressvV4OVq, address2oI7hZ, {from: accounts[2]});
		const uint256iJR8l4m = await MIMOTokenh6j8Gh.getFee.call(uintUclNcLi, {from: accounts[4]});

		assert.equal(boolEk9NeaN, true)
		assert.equal(uint256iJR8l4m, BigInt("50000000000000000"))
		assert.equal(uintD2JtqLi, BigInt("0"))
		assert.equal(uintmnEDCGt, BigInt("0"))
		assert.equal(uintwqsgNFz, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenXRaC3Mb = await MIMOToken.new({from: accounts[4]});
		const uintdcCEEr5 = BigInt("490")
		const uinthGnimi = BigInt("1895")
		const uintTnEblIA = BigInt("892")
		const uint256JwrDS8C = await MIMOTokenXRaC3Mb.setMinFee.call(uintdcCEEr5, {from: accounts[4]});
		const uint2568s5p0L = await MIMOTokenXRaC3Mb.setFeeRate.call(uinthGnimi, {from: accounts[0]});
		const uint256xqHhLQt = await MIMOTokenXRaC3Mb.getFee.call(uintTnEblIA, {from: accounts[4]});

		assert.equal(uint256xqHhLQt, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenREs2pS4 = await MIMOToken.new({from: accounts[4]});
		const uintOmbeAYx = BigInt("1497")
		const uintKk9SFj = BigInt("1393")
		const uint256INWphCu = await MIMOTokenREs2pS4.setMinFee.call(uintOmbeAYx, {from: accounts[1]});
		const uint256yUUb9Z = await MIMOTokenREs2pS4.setFeeRate.call(uintKk9SFj, {from: accounts[3]});
		const uint1Lxb1h = await MIMOTokenREs2pS4.totalSupply.call({from: accounts[3]});

		assert.equal(uint1Lxb1h, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGT77cIB = await MIMOToken.new({from: accounts[2]});
		const addresspi9s87I = accounts[2]
		const uintNMUgOVu = BigInt("239")
		const uintpPa6h8s = BigInt("1852")
		const addressssQWwY = "0x0000000000000000000000000000000000000001"
		const addressb83UI2B = accounts[2]
		const uintL5eDaY = BigInt("69")
		const uintt2huz57 = await MIMOTokenGT77cIB.balanceOf.call(addresspi9s87I, {from: accounts[4]});
		const uint2562DUL8S = await MIMOTokenGT77cIB.setFeeRate.call(uintNMUgOVu, {from: accounts[5]});
		const booleUjl1Ok = await MIMOTokenGT77cIB.transferFrom.call(addressb83UI2B, addressssQWwY, uintpPa6h8s, {from: accounts[0]});
		const uint256gurC8a = await MIMOTokenGT77cIB.setMinFee.call(uintL5eDaY, {from: accounts[0]});

		assert.equal(uintt2huz57, BigInt("0"))
		await expect(MIMOTokenGT77cIB.transferFrom.call(addressb83UI2B, addressssQWwY, uintpPa6h8s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})