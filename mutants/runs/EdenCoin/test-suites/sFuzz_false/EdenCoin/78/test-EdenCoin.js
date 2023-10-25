const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinpVGTRf = await EdenCoin.new({from: accounts[0]});
		const uintoOlsbw7 = BigInt("24")
		const addressuhp5bkR = accounts[3]
		const uintne3om3 = BigInt("1247")
		const addressRP4qYFx = accounts[5]
		const addressNdBBIgt = accounts[0]
		const uintPQBHy9J = BigInt("631")
		const addressOZCXl3C = accounts[0]
		const addressskuzT3Z = accounts[2]
		const uintaIpAwL3 = BigInt("418")
		const addressgD9pAS = accounts[0]
		const boolmuuN2ZG = await EdenCoinpVGTRf.approve.call(addressuhp5bkR, uintoOlsbw7, {from: accounts[0]});
		const boolmx2kEVl = await EdenCoinpVGTRf.transferFrom.call(addressNdBBIgt, addressRP4qYFx, uintne3om3, {from: accounts[4]});
		const boolR546nNl = await EdenCoinpVGTRf.transferFrom.call(addressskuzT3Z, addressOZCXl3C, uintPQBHy9J, {from: accounts[3]});
		const boolAgD64o8 = await EdenCoinpVGTRf.approve.call(addressgD9pAS, uintaIpAwL3, {from: accounts[1]});

		assert.equal(boolmuuN2ZG, true)
		await expect(EdenCoinpVGTRf.transferFrom.call(addressNdBBIgt, addressRP4qYFx, uintne3om3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinQ6CLObG = await EdenCoin.new({from: accounts[4]});
		const addresshxbQfmz = accounts[1]
		const uintKSTgs2G = BigInt("2030")
		const addressz6LNHx = "0x0000000000000000000000000000000000000001"
		const addressOymCZ1A = accounts[3]
		const addressBI9kNmF = accounts[1]
		const addresswMBmQg = accounts[4]
		const uint256L1VeZrt = await EdenCoinQ6CLObG.balanceOf.call(addresshxbQfmz, {from: accounts[2]});
		const boolZY5Vayn = await EdenCoinQ6CLObG.transferFrom.call(addressOymCZ1A, addressz6LNHx, uintKSTgs2G, {from: accounts[0]});
		const uint256rpcQJDs = await EdenCoinQ6CLObG.allowance.call(addresswMBmQg, addressBI9kNmF, {from: accounts[5]});

		assert.equal(uint256L1VeZrt, BigInt("0"))
		await expect(EdenCoinQ6CLObG.transferFrom.call(addressOymCZ1A, addressz6LNHx, uintKSTgs2G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinPJxOylr = await EdenCoin.new({from: accounts[1]});
		const uintd3W7e4V = BigInt("938")
		const addressIga3t0 = accounts[2]
		const uintCn9kDsw = BigInt("1754")
		const addressg6tcJ8T = accounts[5]
		const addressS558ME7 = accounts[3]
		const addressrjmSFnY = accounts[0]
		const addressKasQYFL = accounts[0]
		const addressNbiuaqP = accounts[0]
		const addressL0BKq9U = "0x0000000000000000000000000000000000000001"
		const uinthruSYck = BigInt("1414")
		const addressV7focds = "0x0000000000000000000000000000000000000001"
		const boolfTROXm0 = await EdenCoinPJxOylr.decreaseApproval.call(addressIga3t0, uintd3W7e4V, {from: accounts[1]});
		const boolxJe4QsY = await EdenCoinPJxOylr.transferFrom.call(addressS558ME7, addressg6tcJ8T, uintCn9kDsw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256j9cAoHA = await EdenCoinPJxOylr.allowance.call(addressKasQYFL, addressrjmSFnY, {from: accounts[4]});
		const uint256pVQp1hP = await EdenCoinPJxOylr.allowance.call(addressL0BKq9U, addressNbiuaqP, {from: accounts[4]});
		const bool1RksYf = await EdenCoinPJxOylr.increaseApproval.call(addressV7focds, uinthruSYck, {from: accounts[1]});

		assert.equal(boolfTROXm0, true)
		await expect(EdenCoinPJxOylr.transferFrom.call(addressS558ME7, addressg6tcJ8T, uintCn9kDsw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin1JbLIA = await EdenCoin.new({from: accounts[0]});
		const uintC0Rloxe = BigInt("256")
		const addressZHZM08Y = accounts[0]
		const uintLhY4Ewr = BigInt("1601")
		const addressOUranEa = accounts[2]
		const uintcfg0tMF = BigInt("123")
		const addressmQZLzc = accounts[2]
		const boolXMepM42 = await EdenCoin1JbLIA.increaseApproval.call(addressZHZM08Y, uintC0Rloxe, {from: accounts[3]});
		const boolulbByRD = await EdenCoin1JbLIA.transfer.call(addressOUranEa, uintLhY4Ewr, {from: accounts[0]});
		const boolx0bftF0 = await EdenCoin1JbLIA.increaseApproval.call(addressmQZLzc, uintcfg0tMF, {from: accounts[3]});

		assert.equal(boolXMepM42, true)
		assert.equal(boolulbByRD, true)
		assert.equal(boolx0bftF0, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoings32FXa = await EdenCoin.new({from: accounts[1]});
		const uintx713qbh = BigInt("1617")
		const addressN7CTMqG = "0x0000000000000000000000000000000000000001"
		const addressB0uHYa = "0x0000000000000000000000000000000000000001"
		const addressWCZQtX5 = accounts[0]
		const addressPoEacS9 = accounts[1]
		const uintAdIfahQ = BigInt("1793")
		const addressdAe8wE = accounts[0]
		const addressRaYOcL = accounts[2]
		const addressfSlw2RQ = accounts[4]
		const boolyLNNKGD = await EdenCoings32FXa.decreaseApproval.call(addressN7CTMqG, uintx713qbh, {from: accounts[3]});
		const uint256qt5Jfhv = await EdenCoings32FXa.allowance.call(addressWCZQtX5, addressB0uHYa, {from: accounts[5]});
		const uint256IZxWXjT = await EdenCoings32FXa.balanceOf.call(addressPoEacS9, {from: accounts[0]});
		const boolFTvdzCP = await EdenCoings32FXa.decreaseApproval.call(addressdAe8wE, uintAdIfahQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IH0mdmX = await EdenCoings32FXa.allowance.call(addressfSlw2RQ, addressRaYOcL, {from: accounts[2]});

		assert.equal(boolFTvdzCP, true)
		assert.equal(boolyLNNKGD, true)
		assert.equal(uint256IH0mdmX, BigInt("0"))
		assert.equal(uint256IZxWXjT, BigInt("1000000000000000000000000000"))
		assert.equal(uint256qt5Jfhv, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinGPJ1ObB = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQIRDSNT = BigInt("1217")
		const addressdG8IyPt = accounts[0]
		const uintujWKsp4 = BigInt("903")
		const addressRlP53M7 = "0x0000000000000000000000000000000000000001"
		const addressjjCgaDF = accounts[3]
		const uintB4vsr9u = BigInt("1791")
		const addressmeJRvI = accounts[2]
		const boolL1NGbtg = await EdenCoinGPJ1ObB.transfer.call(addressdG8IyPt, uintQIRDSNT, {from: accounts[3]});
		const boolAT4RkfS = await EdenCoinGPJ1ObB.transferFrom.call(addressjjCgaDF, addressRlP53M7, uintujWKsp4, {from: accounts[1]});
		const boolKkuLizc = await EdenCoinGPJ1ObB.approve.call(addressmeJRvI, uintB4vsr9u, {from: accounts[2]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinnTmcn4v = await EdenCoin.new({from: accounts[0]});
		const uintRWp0LeF = BigInt("291")
		const addressPFz7B6U = accounts[2]
		const uintHMEDXK = BigInt("0")
		const addressbt7VzZ = accounts[4]
		const boolrhnCEHI = await EdenCoinnTmcn4v.increaseApproval.call(addressPFz7B6U, uintRWp0LeF, {from: accounts[4]});
		const boolY1sinRG = await EdenCoinnTmcn4v.decreaseApproval.call(addressbt7VzZ, uintHMEDXK, {from: accounts[3]});

		assert.equal(boolY1sinRG, true)
		assert.equal(boolrhnCEHI, true)
	});
})