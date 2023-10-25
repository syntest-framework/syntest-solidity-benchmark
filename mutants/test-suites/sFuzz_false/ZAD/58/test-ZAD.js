const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADxK6cFQ = await ZAD.new({from: accounts[4]});
		const uintLn7YMzR = BigInt("1956")
		const addressjCmTwh8 = accounts[2]
		const uintyMX2ZKD = BigInt("1945")
		const addresshxhYAp = accounts[3]
		const bool10u7aU = await ZADxK6cFQ.increaseAllowance.call(addressjCmTwh8, uintLn7YMzR, {from: accounts[2]});
		const boolXEZyUvZ = await ZADxK6cFQ.increaseAllowance.call(addresshxhYAp, uintyMX2ZKD, {from: accounts[0]});

		assert.equal(bool10u7aU, true)
		assert.equal(boolXEZyUvZ, true)
	});

	it('test for ZAD', async () => {
		const ZADqSP252 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZSGcqWU = BigInt("271")
		const addressnpMlQC5 = accounts[5]
		const uintYozc8Q = BigInt("1520")
		const addresskIpFM5 = accounts[1]
		const uintL0d8V7h = BigInt("1656")
		const addressDjQxhCd = accounts[2]
		const boolAlhxLzF = await ZADqSP252.increaseAllowance.call(addressnpMlQC5, uintZSGcqWU, {from: accounts[0]});
		const boollE9PxN2 = await ZADqSP252.increaseAllowance.call(addresskIpFM5, uintYozc8Q, {from: accounts[0]});
		const stringZ5UZODO = await ZADqSP252.name.call({from: accounts[2]});
		const boolvOKqkjZ = await ZADqSP252.transfer.call(addressDjQxhCd, uintL0d8V7h, {from: accounts[1]});
	});

	it('test for ZAD', async () => {
		const ZADnzTpsWb = await ZAD.new({from: accounts[2]});
		const uintERjYp6J = BigInt("48")
		const addresszb2IGqo = accounts[0]
		const uintT0cnx7u = BigInt("585")
		const addressfIKzzX1 = accounts[0]
		const uintnvhE62K = BigInt("475")
		const addressyo8lob0 = accounts[0]
		const uintYb15w4 = BigInt("553")
		const addressaEsKwdu = accounts[1]
//		const booln0JpyP5 = await ZADnzTpsWb.transfer.call(addresszb2IGqo, uintERjYp6J, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwqH52K = await ZADnzTpsWb.decreaseAllowance.call(addressfIKzzX1, uintT0cnx7u, {from: accounts[0]});
//		const booluG2jTdx = await ZADnzTpsWb.decreaseAllowance.call(addressyo8lob0, uintnvhE62K, {from: accounts[0]});
//		const boolzGVI8Q2 = await ZADnzTpsWb.decreaseAllowance.call(addressaEsKwdu, uintYb15w4, {from: accounts[2]});

		await expect(ZADnzTpsWb.transfer.call(addresszb2IGqo, uintERjYp6J, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADpEX3C43 = await ZAD.new({from: accounts[1]});
		const addressF2S2nLp = accounts[0]
		const uinteMfbSyh = BigInt("30")
		const addressXa65Ap1 = "0x0000000000000000000000000000000000000001"
		const uinteFLani = BigInt("207")
		const uint256xwqdQU3 = await ZADpEX3C43.balanceOf.call(addressF2S2nLp, {from: accounts[2]});
		const boolyHY70ac = await ZADpEX3C43.approve.call(addressXa65Ap1, uinteMfbSyh, {from: accounts[2]});
//		const uint256pWMtpi5 = await ZADpEX3C43._burn.call(uinteFLani, {from: accounts[0]});

		assert.equal(boolyHY70ac, true)
		assert.equal(uint256xwqdQU3, BigInt("0"))
		await expect(ZADpEX3C43._burn.call(uinteFLani, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmtjnPx6 = await ZAD.new({from: accounts[3]});
		const uintDp6ryQu = BigInt("1125")
		const addressq7CgNRN = "0x0000000000000000000000000000000000000001"
		const addressliMsNMy = "0x0000000000000000000000000000000000000001"
		const uintTqD3bpw = BigInt("1956")
		const addressdWm84Fi = accounts[1]
		const addressXHfntSy = accounts[1]
//		const boolQk7UGkr = await ZADmtjnPx6.transferFrom.call(addressliMsNMy, addressq7CgNRN, uintDp6ryQu, {from: accounts[3]});
//		const boolmxdcHQq = await ZADmtjnPx6.decreaseAllowance.call(addressdWm84Fi, uintTqD3bpw, {from: accounts[4]});
//		const uint256TSwWIXy = await ZADmtjnPx6.balanceOf.call(addressXHfntSy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ZADmtjnPx6.transferFrom.call(addressliMsNMy, addressq7CgNRN, uintDp6ryQu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxZq95uf = await ZAD.new({from: accounts[2]});
		const uintZGo6ra4 = BigInt("396")
		const addressHbY29fU = accounts[2]
		const addressykHGSPk = "0x0000000000000000000000000000000000000001"
		const addressoz4IlK1 = accounts[1]
//		const boolpaGxTxi = await ZADxZq95uf.decreaseAllowance.call(addressHbY29fU, uintZGo6ra4, {from: accounts[4]});
//		const uint256jqxFPs = await ZADxZq95uf.totalSupply.call({from: accounts[2]});
//		const uint256KGLvf2U = await ZADxZq95uf.totalSupply.call({from: accounts[3]});
//		const uint256UscJLz5 = await ZADxZq95uf.allowance.call(addressoz4IlK1, addressykHGSPk, {from: accounts[3]});

		await expect(ZADxZq95uf.decreaseAllowance.call(addressHbY29fU, uintZGo6ra4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxK6cFQ = await ZAD.new({from: accounts[4]});
		const uintIk2FhDe = BigInt("430")
		const addressXwr4Klt = accounts[2]
		const uintSza0Sir = BigInt("1898")
		const uintom8Q0ZI = BigInt("1945")
		const addressnSKQDCf = accounts[3]
		const bool10u7aU = await ZADxK6cFQ.increaseAllowance.call(addressXwr4Klt, uintIk2FhDe, {from: accounts[2]});
		const uint8yVh8DQO = await ZADxK6cFQ.decimals.call({from: accounts[4]});
//		const uint256KLoritR = await ZADxK6cFQ._burn.call(uintSza0Sir, {from: accounts[3]});
//		const boolXEZyUvZ = await ZADxK6cFQ.increaseAllowance.call(addressnSKQDCf, uintom8Q0ZI, {from: accounts[0]});

		assert.equal(bool10u7aU, true)
		assert.equal(uint8yVh8DQO, BigInt("18"))
		await expect(ZADxK6cFQ._burn.call(uintSza0Sir, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxK6cFQ = await ZAD.new({from: accounts[4]});
		const addressAJGv8bA = accounts[0]
		const addressi8tIJD = "0x0000000000000000000000000000000000000001"
		const uinth49RwY = BigInt("1956")
		const addressHRKCJpf = accounts[3]
		const addressrDD80C3 = accounts[1]
		const addressDYou187 = accounts[2]
		const uintzndkc46 = BigInt("1945")
		const addressw6FPtNw = accounts[3]
		const uint256DzbZHvE = await ZADxK6cFQ.allowance.call(addressi8tIJD, addressAJGv8bA, {from: accounts[1]});
		const bool10u7aU = await ZADxK6cFQ.increaseAllowance.call(addressHRKCJpf, uinth49RwY, {from: accounts[2]});
		const uint256KQZY2x0 = await ZADxK6cFQ.allowance.call(addressDYou187, addressrDD80C3, {from: "0x0000000000000000000000000000000000000001"});
		const boolXEZyUvZ = await ZADxK6cFQ.increaseAllowance.call(addressw6FPtNw, uintzndkc46, {from: accounts[0]});

		assert.equal(bool10u7aU, true)
		assert.equal(boolXEZyUvZ, true)
		assert.equal(uint256DzbZHvE, BigInt("0"))
		assert.equal(uint256KQZY2x0, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADfiQDXm5 = await ZAD.new({from: accounts[0]});
		const uintDZoIpfs = BigInt("1431")
		const addressmvlQYMt = accounts[2]
		const uintz08uoE6 = BigInt("423")
		const addresswLpWDjt = accounts[1]
		const addressj3MtJ8b = accounts[4]
		const uint8fA0gxTs = await ZADfiQDXm5.decimals.call({from: accounts[0]});
		const boolCsmexpl = await ZADfiQDXm5.increaseAllowance.call(addressmvlQYMt, uintDZoIpfs, {from: accounts[4]});
		const string8NkiiL = await ZADfiQDXm5.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const booluqj78oc = await ZADfiQDXm5.transferFrom.call(addressj3MtJ8b, addresswLpWDjt, uintz08uoE6, {from: accounts[4]});
//		const uint256DBktfWx = await ZADfiQDXm5.totalSupply.call({from: accounts[4]});
//		const stringU6wAqXA = await ZADfiQDXm5.name.call({from: accounts[5]});

		assert.equal(boolCsmexpl, true)
		assert.equal(string8NkiiL, "Zadkiel")
		assert.equal(uint8fA0gxTs, BigInt("18"))
		await expect(ZADfiQDXm5.transferFrom.call(addressj3MtJ8b, addresswLpWDjt, uintz08uoE6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxK6cFQ = await ZAD.new({from: accounts[4]});
		const uintwQ5HlX9 = BigInt("1956")
		const addressRWXot33 = accounts[3]
		const boolXEZyUvZ = await ZADxK6cFQ.increaseAllowance.call(addressRWXot33, uintwQ5HlX9, {from: accounts[0]});
		const uint8PvX6FAn = await ZADxK6cFQ.decimals.call({from: accounts[4]});
		const stringwuDVqVW = await ZADxK6cFQ.symbol.call({from: accounts[0]});

		assert.equal(boolXEZyUvZ, true)
		assert.equal(stringwuDVqVW, "ZAD")
		assert.equal(uint8PvX6FAn, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADxK6cFQ = await ZAD.new({from: accounts[4]});
		const uintLHTnQ3 = BigInt("1949")
		const addressBy3zIc = accounts[3]
		const uintYIzehQF = BigInt("285")
		const addresswCRPy5 = accounts[1]
		const boolXEZyUvZ = await ZADxK6cFQ.increaseAllowance.call(addressBy3zIc, uintLHTnQ3, {from: accounts[0]});
		const uint256vAFVvP5 = await ZADxK6cFQ.totalSupply.call({from: accounts[5]});
		const boolImMX01 = await ZADxK6cFQ.increaseAllowance.call(addresswCRPy5, uintYIzehQF, {from: accounts[5]});

		assert.equal(boolImMX01, true)
		assert.equal(boolXEZyUvZ, true)
		assert.equal(uint256vAFVvP5, BigInt("100000000000000000000000000"))
	});
})