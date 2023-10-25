const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITJBSo0Md = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYOurWTB = BigInt("733")
		const addressMkiCdX = accounts[3]
		const addressbrkj6hs = accounts[2]
		const uintEokeUm = BigInt("2008")
		const addresshfk4hfp = accounts[4]
		const addresswEmut6H = "0x0000000000000000000000000000000000000001"
		const uintBirhCV = BigInt("150")
		const addressXFGuDL = "0x0000000000000000000000000000000000000001"
		const boolGlEZr9B = await RITJBSo0Md.transferFrom.call(addressbrkj6hs, addressMkiCdX, uintYOurWTB, {from: accounts[4]});
		const boolyukn2F = await RITJBSo0Md.approve.call(addresshfk4hfp, uintEokeUm, {from: accounts[0]});
		const uint256y3vQPUN = await RITJBSo0Md.balanceOf.call(addresswEmut6H, {from: accounts[0]});
		const boolK6wZyW = await RITJBSo0Md.transfer.call(addressXFGuDL, uintBirhCV, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITXQ8ctbc = await RIT.new({from: accounts[0]});
		const uintKqSk6p = BigInt("776")
		const addressA2VjBw = accounts[2]
		const uintwHYmieM = BigInt("777")
		const uintVHXHsG3 = BigInt("1075")
		const addresshner4H2 = "0x0000000000000000000000000000000000000001"
		const uintHqW0itm = BigInt("561")
		const addresszetiB2X = accounts[4]
		const uintTh2U8Hf = BigInt("658")
		const addressY6ySJr7 = accounts[3]
		const addressF6tiJmP = "0x0000000000000000000000000000000000000001"
		const addressBWsAGnf = accounts[1]
		const boolZkuloYJ = await RITXQ8ctbc.decreaseAllowance.call(addressA2VjBw, uintKqSk6p, {from: accounts[0]});
		const uint256rAln1iv = await RITXQ8ctbc._burn.call(uintwHYmieM, {from: accounts[1]});
		const boolUjIVkSt = await RITXQ8ctbc.increaseAllowance.call(addresshner4H2, uintVHXHsG3, {from: "0x0000000000000000000000000000000000000001"});
		const boolmzExar2 = await RITXQ8ctbc.transfer.call(addresszetiB2X, uintHqW0itm, {from: accounts[1]});
		const boolmp90Keq = await RITXQ8ctbc.decreaseAllowance.call(addressY6ySJr7, uintTh2U8Hf, {from: accounts[0]});
		const uint256b26XXlh = await RITXQ8ctbc.allowance.call(addressBWsAGnf, addressF6tiJmP, {from: accounts[0]});

		await expect(RITXQ8ctbc.decreaseAllowance.call(addressA2VjBw, uintKqSk6p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITUO0qvKm = await RIT.new({from: accounts[3]});
		const addressBkvXYnD = accounts[3]
		const addressR1RyEK = accounts[3]
		const uint256wnrAsdL = await RITUO0qvKm.totalSupply.call({from: accounts[1]});
		const uint256uwQSpTa = await RITUO0qvKm.allowance.call(addressR1RyEK, addressBkvXYnD, {from: accounts[4]});
		const uint8HqjBQIw = await RITUO0qvKm.decimals.call({from: accounts[3]});
		const uint8ZMHRMS2 = await RITUO0qvKm.decimals.call({from: accounts[0]});

		assert.equal(uint256uwQSpTa, BigInt("0"))
		assert.equal(uint256wnrAsdL, BigInt("500000000000000000000000000"))
		assert.equal(uint8HqjBQIw, BigInt("18"))
		assert.equal(uint8ZMHRMS2, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITJC6DNev = await RIT.new({from: accounts[2]});
		const uintncsn5Z7 = BigInt("639")
		const addressqE9tWcl = accounts[1]
		const uinto623yC = BigInt("623")
		const addressITLnfOM = accounts[2]
		const stringPoQ6IUX = await RITJC6DNev.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWdn8nU = await RITJC6DNev.increaseAllowance.call(addressqE9tWcl, uintncsn5Z7, {from: accounts[0]});
		const bool9xl8bu = await RITJC6DNev.transfer.call(addressITLnfOM, uinto623yC, {from: accounts[0]});

		assert.equal(boolWdn8nU, true)
		assert.equal(stringPoQ6IUX, "Real Estate Investment Token")
		await expect(RITJC6DNev.transfer.call(addressITLnfOM, uinto623yC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxvLkF0 = await RIT.new({from: accounts[2]});
		const uintGYMahZj = BigInt("568")
		const addressLWdBrD2 = accounts[3]
		const uintBd95Gm = BigInt("659")
		const addressgWbbAgO = accounts[5]
		const uinta0SgIUM = BigInt("119")
		const booltHKEXZd = await RITxvLkF0.increaseAllowance.call(addressLWdBrD2, uintGYMahZj, {from: accounts[5]});
		const uint8wUbynw1 = await RITxvLkF0.decimals.call({from: accounts[4]});
		const boolIOrDyP5 = await RITxvLkF0.approve.call(addressgWbbAgO, uintBd95Gm, {from: accounts[3]});
		const stringtqNG5rm = await RITxvLkF0.symbol.call({from: accounts[5]});
		const uint256wFCuSgo = await RITxvLkF0._burn.call(uinta0SgIUM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIOrDyP5, true)
		assert.equal(booltHKEXZd, true)
		assert.equal(stringtqNG5rm, "RIT 2.0")
		assert.equal(uint8wUbynw1, BigInt("18"))
		await expect(RITxvLkF0._burn.call(uinta0SgIUM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITIY5zGch = await RIT.new({from: accounts[2]});
		const addressj0s0rEQ = accounts[3]
		const addressQVcdzcs = accounts[2]
		const uintgtU0EZS = BigInt("1358")
		const addressL7EKjqd = accounts[3]
		const uintnaPM8SB = BigInt("292")
		const addresse9UWHcC = accounts[3]
		const addresstPuMHuv = accounts[3]
		const addresskWr2CPT = "0x0000000000000000000000000000000000000001"
		const address9gDmBf = accounts[5]
		const uint256bAm9P39 = await RITIY5zGch.allowance.call(addressQVcdzcs, addressj0s0rEQ, {from: accounts[4]});
		const booluetutQf = await RITIY5zGch.increaseAllowance.call(addressL7EKjqd, uintgtU0EZS, {from: accounts[1]});
		const boolhQ2rOpv = await RITIY5zGch.transferFrom.call(addresstPuMHuv, addresse9UWHcC, uintnaPM8SB, {from: accounts[0]});
		const uint256AUD4Oyz = await RITIY5zGch.allowance.call(address9gDmBf, addresskWr2CPT, {from: accounts[4]});

		assert.equal(booluetutQf, true)
		assert.equal(uint256bAm9P39, BigInt("0"))
		await expect(RITIY5zGch.transferFrom.call(addresstPuMHuv, addresse9UWHcC, uintnaPM8SB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITXLowKAR = await RIT.new({from: accounts[1]});
		const addressRmQqkoH = accounts[3]
		const stringDiimN6 = await RITXLowKAR.name.call({from: accounts[3]});
		const uint256fK36oVk = await RITXLowKAR.balanceOf.call(addressRmQqkoH, {from: accounts[3]});

		assert.equal(stringDiimN6, "Real Estate Investment Token")
		assert.equal(uint256fK36oVk, BigInt("0"))
	});
})