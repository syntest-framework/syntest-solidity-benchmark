const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenYmSKv2z = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTdwajbN = BigInt("421")
		const addressS3oY0Sv = accounts[1]
		const addresslROKnyX = accounts[4]
		const uintPUz4v1F = BigInt("352")
		const addressh4Q0NN6 = accounts[2]
		const addressxQGNoK = accounts[1]
		const uintyUOaje3 = BigInt("869")
		const addressQlwP5fE = accounts[2]
		const addressdQp4Llg = accounts[1]
		const boolugPLAOp = await ThriftTokenYmSKv2z.transfer.call(addressS3oY0Sv, uintTdwajbN, {from: accounts[4]});
		const addressc2rWdz9 = await ThriftTokenYmSKv2z.transferOwnership.call(addresslROKnyX, {from: accounts[3]});
		const booly9WRHFj = await ThriftTokenYmSKv2z.transferFrom.call(addressxQGNoK, addressh4Q0NN6, uintPUz4v1F, {from: accounts[2]});
		const boolSMWT97n = await ThriftTokenYmSKv2z.transferFrom.call(addressdQp4Llg, addressQlwP5fE, uintyUOaje3, {from: accounts[5]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEBDyMZq = await ThriftToken.new({from: accounts[1]});
		const uintUjnx2QI = BigInt("306")
		const addressGENaTeR = accounts[5]
		const uintccVfzNd = BigInt("1460")
		const addressBsqQfrT = accounts[2]
		const addressxgrbZAK = accounts[5]
		const uintl914WS = BigInt("411")
		const addressODEmZt6 = accounts[0]
		const booliqu0XkC = await ThriftTokenEBDyMZq.approve.call(addressGENaTeR, uintUjnx2QI, {from: accounts[5]});
		const boolRGxNYmJ = await ThriftTokenEBDyMZq.transferFrom.call(addressxgrbZAK, addressBsqQfrT, uintccVfzNd, {from: accounts[1]});
		const boolTA0qpk4 = await ThriftTokenEBDyMZq.approve.call(addressODEmZt6, uintl914WS, {from: accounts[5]});

		await expect(ThriftTokenEBDyMZq.approve.call(addressGENaTeR, uintUjnx2QI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokennWVV87 = await ThriftToken.new({from: accounts[3]});
		const uintDpNeRLE = BigInt("1858")
		const addressLs8r5c = accounts[0]
		const uintSKXljwb = BigInt("445")
		const addressqy7iUrf = accounts[1]
		const uintOXtvKm = BigInt("252")
		const address4gEuSV = accounts[5]
		const boolVgN7LK6 = await ThriftTokennWVV87.approve.call(addressLs8r5c, uintDpNeRLE, {from: accounts[4]});
		const boollc6BgEb = await ThriftTokennWVV87.increaseApproval.call(addressqy7iUrf, uintSKXljwb, {from: accounts[3]});
		const boolq8lxNk7 = await ThriftTokennWVV87.approve.call(address4gEuSV, uintOXtvKm, {from: accounts[2]});

		assert.equal(boolVgN7LK6, true)
		assert.equal(boollc6BgEb, true)
		assert.equal(boolq8lxNk7, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenoOOL3pP = await ThriftToken.new({from: accounts[2]});
		const uintmcJe6t = BigInt("2017")
		const addressFOpQnEI = accounts[0]
		const addressdvRKQVx = accounts[2]
		const boolWMLTyBv = await ThriftTokenoOOL3pP.transfer.call(addressFOpQnEI, uintmcJe6t, {from: accounts[1]});
		const uint256Rq9cTw3 = await ThriftTokenoOOL3pP.transferableTokens.call(addressdvRKQVx, {from: accounts[0]});

		await expect(ThriftTokenoOOL3pP.transfer.call(addressFOpQnEI, uintmcJe6t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvbZKUTh = await ThriftToken.new({from: accounts[3]});
		const uintANIWGyG = BigInt("550")
		const addressc8I3Rjk = accounts[2]
		const uintFNJza3 = BigInt("1642")
		const addressCedrYO5 = accounts[4]
		const addressObMgbrO = accounts[2]
		const addressHD9FmFm = accounts[4]
		const addressX5wu8ON = accounts[3]
		const boolHdWnOmx = await ThriftTokenvbZKUTh.approve.call(addressc8I3Rjk, uintANIWGyG, {from: accounts[5]});
		const boolaQLB5Vo = await ThriftTokenvbZKUTh.decreaseApproval.call(addressCedrYO5, uintFNJza3, {from: accounts[1]});
		const uint256p9zqjbh = await ThriftTokenvbZKUTh.allowance.call(addressHD9FmFm, addressObMgbrO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256G0sC8oR = await ThriftTokenvbZKUTh.balanceOf.call(addressX5wu8ON, {from: accounts[1]});

		assert.equal(boolHdWnOmx, true)
		assert.equal(boolaQLB5Vo, true)
		assert.equal(uint256G0sC8oR, BigInt("0"))
		assert.equal(uint256p9zqjbh, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenw5t2hdv = await ThriftToken.new({from: accounts[0]});
		const addressXgUA5uY = accounts[3]
		const addressVCzK1Tc = accounts[0]
		const addressLkm5fJs = accounts[0]
		const addressPsw4Tgz = accounts[1]
		const uintZnldHpM = BigInt("621")
		const addressCy1msm7 = accounts[4]
		const uint256IVJS42i = await ThriftTokenw5t2hdv.allowance.call(addressVCzK1Tc, addressXgUA5uY, {from: accounts[0]});
		const addressLpa3YQ5 = await ThriftTokenw5t2hdv.transferOwnership.call(addressLkm5fJs, {from: accounts[4]});
		const uint256nojIAPD = await ThriftTokenw5t2hdv.transferableTokens.call(addressPsw4Tgz, {from: accounts[4]});
		const boolUyqY7X1 = await ThriftTokenw5t2hdv.increaseApproval.call(addressCy1msm7, uintZnldHpM, {from: accounts[3]});

		assert.equal(uint256IVJS42i, BigInt("0"))
		await expect(ThriftTokenw5t2hdv.transferOwnership.call(addressLkm5fJs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenYJ6JUfo = await ThriftToken.new({from: accounts[5]});
		const uintFCzuo4h = BigInt("1720")
		const addressmzmbALE = accounts[3]
		const uintybGk7Ei = BigInt("939")
		const addressL3STaMG = accounts[4]
		const addressqpQKhLc = accounts[2]
		const uinttXASTy0 = BigInt("292")
		const addressXJs5gTd = accounts[5]
		const boolCYhlAjh = await ThriftTokenYJ6JUfo.decreaseApproval.call(addressmzmbALE, uintFCzuo4h, {from: "0x0000000000000000000000000000000000000001"});
		const boolYGdyRNY = await ThriftTokenYJ6JUfo.transferFrom.call(addressqpQKhLc, addressL3STaMG, uintybGk7Ei, {from: accounts[4]});
		const booloOSMdBI = await ThriftTokenYJ6JUfo.decreaseApproval.call(addressXJs5gTd, uinttXASTy0, {from: accounts[5]});

		assert.equal(boolCYhlAjh, true)
		await expect(ThriftTokenYJ6JUfo.transferFrom.call(addressqpQKhLc, addressL3STaMG, uintybGk7Ei, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeninuiRyG = await ThriftToken.new({from: accounts[5]});
		const uintfmVUnkA = BigInt("431")
		const addressXE3EsgB = accounts[1]
		const uintQ15sFy3 = BigInt("1822")
		const addressRraescK = accounts[0]
		const uints7hlnBz = BigInt("567")
		const addressxlO2Bzk = accounts[2]
		const addressYTnNl9r = accounts[3]
		const booleGOOIS9 = await ThriftTokeninuiRyG.approve.call(addressXE3EsgB, uintfmVUnkA, {from: accounts[3]});
		const boolDwFcQm3 = await ThriftTokeninuiRyG.approve.call(addressRraescK, uintQ15sFy3, {from: accounts[4]});
		const booldMxYkMd = await ThriftTokeninuiRyG.increaseApproval.call(addressxlO2Bzk, uints7hlnBz, {from: "0x0000000000000000000000000000000000000001"});
		const addressVgrVVbI = await ThriftTokeninuiRyG.transferOwnership.call(addressYTnNl9r, {from: accounts[5]});

		assert.equal(boolDwFcQm3, true)
		assert.equal(booldMxYkMd, true)
		assert.equal(booleGOOIS9, true)
	});
})