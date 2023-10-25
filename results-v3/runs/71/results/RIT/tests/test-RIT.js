const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITnJWBmEs = await RIT.new({from: accounts[3]});
		const uintQxNDiMH = BigInt("1778")
		const addressA4wM58y = accounts[5]
		const boolm48LOUK = await RITnJWBmEs.transfer.call(addressA4wM58y, uintQxNDiMH, {from: accounts[2]});
		const uint256haHTv5M = await RITnJWBmEs.totalSupply.call({from: accounts[0]});
		const strings57l1Ko = await RITnJWBmEs.symbol.call({from: accounts[0]});

		await expect(RITnJWBmEs.transfer.call(addressA4wM58y, uintQxNDiMH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITe89vbXu = await RIT.new({from: accounts[2]});
		const addressbxtAqqU = accounts[2]
		const uintSM8Ltx4 = BigInt("956")
		const addresshdRlTY = accounts[4]
		const addressLBN2zE = accounts[2]
		const uintc9Mnvz8 = BigInt("1820")
		const addresscuqnGhW = accounts[4]
		const addresso15fwG6 = accounts[1]
		const stringcU8XcAL = await RITe89vbXu.symbol.call({from: accounts[1]});
		const uint8SQzrUld = await RITe89vbXu.decimals.call({from: accounts[4]});
		const uint256kZd2FuA = await RITe89vbXu.balanceOf.call(addressbxtAqqU, {from: accounts[2]});
		const boolJyFR9W2 = await RITe89vbXu.transferFrom.call(addressLBN2zE, addresshdRlTY, uintSM8Ltx4, {from: accounts[3]});
		const uint8zII6Inu = await RITe89vbXu.decimals.call({from: accounts[4]});
		const boolPX5t4lP = await RITe89vbXu.transferFrom.call(addresso15fwG6, addresscuqnGhW, uintc9Mnvz8, {from: accounts[4]});

		assert.equal(stringcU8XcAL, "RIT 2.0")
		assert.equal(uint256kZd2FuA, BigInt("0"))
		assert.equal(uint8SQzrUld, BigInt("18"))
		await expect(RITe89vbXu.transferFrom.call(addressLBN2zE, addresshdRlTY, uintSM8Ltx4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITrOc6H2Y = await RIT.new({from: accounts[1]});
		const uinte0drYmj = BigInt("1590")
		const addressAZqG3lD = accounts[2]
		const addressmBnJTdH = accounts[1]
		const addresszfWhXgP = accounts[4]
		const uintQ5aPJc = BigInt("659")
		const addressbTLsgWI = accounts[2]
		const boolYDrmKwj = await RITrOc6H2Y.decreaseAllowance.call(addressAZqG3lD, uinte0drYmj, {from: accounts[1]});
		const uint256LVWRQ0C = await RITrOc6H2Y.allowance.call(addresszfWhXgP, addressmBnJTdH, {from: accounts[4]});
		const boolJjVFZw1 = await RITrOc6H2Y.transfer.call(addressbTLsgWI, uintQ5aPJc, {from: accounts[3]});

		await expect(RITrOc6H2Y.decreaseAllowance.call(addressAZqG3lD, uinte0drYmj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzXky3RA = await RIT.new({from: accounts[2]});
		const addressdPwwQR = "0x0000000000000000000000000000000000000001"
		const addresszejo0a = accounts[4]
		const uintsK8E2ZW = BigInt("1651")
		const addresspeRwzR = accounts[4]
		const uint8ioEzBGA = await RITzXky3RA.decimals.call({from: accounts[1]});
		const uint256TrE41DT = await RITzXky3RA.totalSupply.call({from: accounts[2]});
		const uint256AicBH1F = await RITzXky3RA.allowance.call(addresszejo0a, addressdPwwQR, {from: "0x0000000000000000000000000000000000000001"});
		const boolitQKxux = await RITzXky3RA.transfer.call(addresspeRwzR, uintsK8E2ZW, {from: accounts[3]});
		const uint8uLnzJDA = await RITzXky3RA.decimals.call({from: accounts[0]});

		assert.equal(uint256AicBH1F, BigInt("0"))
		assert.equal(uint256TrE41DT, BigInt("500000000000000000000000000"))
		assert.equal(uint8ioEzBGA, BigInt("18"))
		await expect(RITzXky3RA.transfer.call(addresspeRwzR, uintsK8E2ZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITQRGv54K = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfgixR5 = accounts[1]
		const uintzBGzG7 = BigInt("120")
		const addressxw5bQxc = accounts[5]
		const addressmbrEdD = accounts[5]
		const addresshqGMUvv = accounts[3]
		const addressaNOmGtR = accounts[1]
		const uint256KKHcUbg = await RITQRGv54K.totalSupply.call({from: accounts[5]});
		const uint256QOaeWXt = await RITQRGv54K.balanceOf.call(addressfgixR5, {from: accounts[5]});
		const boolONNVBVJ = await RITQRGv54K.transferFrom.call(addressmbrEdD, addressxw5bQxc, uintzBGzG7, {from: accounts[1]});
		const uint256SIAe6vS = await RITQRGv54K.allowance.call(addressaNOmGtR, addresshqGMUvv, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITdzGBYu4 = await RIT.new({from: accounts[4]});
		const uintin5lNSS = BigInt("262")
		const addressZ4Kx1ls = accounts[4]
		const uintv00iIch = BigInt("1381")
		const addressPkNipj = accounts[3]
		const addressx27IIYj = accounts[0]
		const uintqGPjhS4 = BigInt("11")
		const addressBDdhmsD = accounts[2]
		const addressBPClt3z = accounts[0]
		const uintlmlKg5q = BigInt("1375")
		const addressbsaYPN8 = accounts[4]
		const stringwm7Rjd = await RITdzGBYu4.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolriefeJs = await RITdzGBYu4.increaseAllowance.call(addressZ4Kx1ls, uintin5lNSS, {from: accounts[5]});
		const boolKhGB0tC = await RITdzGBYu4.transferFrom.call(addressx27IIYj, addressPkNipj, uintv00iIch, {from: accounts[3]});
		const boolxa8tl2 = await RITdzGBYu4.transferFrom.call(addressBPClt3z, addressBDdhmsD, uintqGPjhS4, {from: accounts[0]});
		const boolkbIKzWw = await RITdzGBYu4.increaseAllowance.call(addressbsaYPN8, uintlmlKg5q, {from: accounts[4]});

		assert.equal(boolriefeJs, true)
		assert.equal(stringwm7Rjd, "Real Estate Investment Token")
		await expect(RITdzGBYu4.transferFrom.call(addressx27IIYj, addressPkNipj, uintv00iIch, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITpnXeG9C = await RIT.new({from: accounts[4]});
		const uintr6UyppW = BigInt("408")
		const addressekiUwRP = accounts[4]
		const uintIHNguKB = BigInt("1396")
		const addresstDd6n0 = accounts[0]
		const addressrr2iBHY = accounts[4]
		const uintkIDZwcu = BigInt("1212")
		const address4BHngu = accounts[3]
		const stringzHbdcBs = await RITpnXeG9C.name.call({from: accounts[3]});
		const uint256FUk23Y3 = await RITpnXeG9C.totalSupply.call({from: accounts[2]});
		const boolY1OGa69 = await RITpnXeG9C.increaseAllowance.call(addressekiUwRP, uintr6UyppW, {from: accounts[5]});
		const uint256rbT0syZ = await RITpnXeG9C.totalSupply.call({from: accounts[0]});
		const boolw7F6IO = await RITpnXeG9C.approve.call(addresstDd6n0, uintIHNguKB, {from: accounts[3]});
		const uint256Tfnk2a1 = await RITpnXeG9C.balanceOf.call(addressrr2iBHY, {from: accounts[0]});
		const boolBuB3YG4 = await RITpnXeG9C.decreaseAllowance.call(address4BHngu, uintkIDZwcu, {from: accounts[0]});
		const uint256lGrcAFc = await RITpnXeG9C.totalSupply.call({from: accounts[1]});

		assert.equal(boolY1OGa69, true)
		assert.equal(boolw7F6IO, true)
		assert.equal(stringzHbdcBs, "Real Estate Investment Token")
		assert.equal(uint256FUk23Y3, BigInt("500000000000000000000000000"))
		assert.equal(uint256Tfnk2a1, BigInt("0"))
		assert.equal(uint256rbT0syZ, BigInt("500000000000000000000000000"))
		await expect(RITpnXeG9C.decreaseAllowance.call(address4BHngu, uintkIDZwcu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITwgPi1tE = await RIT.new({from: accounts[3]});
		const uintPlNFXLo = BigInt("904")
		const uintW2In2wY = BigInt("795")
		const addresss85Oeht = accounts[1]
		const uint256IXiLeZY = await RITwgPi1tE._burn.call(uintPlNFXLo, {from: accounts[0]});
		const boolnyt2ymP = await RITwgPi1tE.approve.call(addresss85Oeht, uintW2In2wY, {from: accounts[1]});
		const uint256UKJt1Da = await RITwgPi1tE.totalSupply.call({from: accounts[2]});
		const uint256llLStR8 = await RITwgPi1tE.totalSupply.call({from: accounts[3]});
		const uint8uAG37lH = await RITwgPi1tE.decimals.call({from: accounts[0]});

		await expect(RITwgPi1tE._burn.call(uintPlNFXLo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})