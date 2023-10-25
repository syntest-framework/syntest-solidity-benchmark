const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoingYBJtlz = await EdenCoin.new({from: accounts[5]});
		const uintv26o8uX = BigInt("455")
		const addressIGyGRVT = accounts[1]
		const uintimnabUZ = BigInt("922")
		const addressIxxxuhX = accounts[4]
		const uintKisbthN = BigInt("476")
		const addressu4NuJG = accounts[2]
		const boolGMHs7xn = await EdenCoingYBJtlz.transfer.call(addressIGyGRVT, uintv26o8uX, {from: accounts[2]});
		const boolQWDvoc7 = await EdenCoingYBJtlz.increaseApproval.call(addressIxxxuhX, uintimnabUZ, {from: accounts[3]});
		const boolPXCmEsZ = await EdenCoingYBJtlz.approve.call(addressu4NuJG, uintKisbthN, {from: accounts[1]});

		await expect(EdenCoingYBJtlz.transfer.call(addressIGyGRVT, uintv26o8uX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinsax2nXz = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVpIPqq6 = BigInt("565")
		const addressC5fFvgD = "0x0000000000000000000000000000000000000001"
		const addressh0bXHBt = accounts[0]
		const uintPYOqFQ = BigInt("71")
		const addressaVtNuyE = accounts[3]
		const uintRqwqmyt = BigInt("51")
		const addresspdpVQL5 = accounts[4]
		const addresshaa9zFp = accounts[2]
		const uintl1v8S2s = BigInt("425")
		const addressvulb4Gl = accounts[2]
		const uintV1krNdu = BigInt("218")
		const addresszbiiRhS = accounts[2]
		const boolRyEXyQ = await EdenCoinsax2nXz.transferFrom.call(addressh0bXHBt, addressC5fFvgD, uintVpIPqq6, {from: accounts[1]});
		const boolf9AXdqw = await EdenCoinsax2nXz.approve.call(addressaVtNuyE, uintPYOqFQ, {from: accounts[0]});
		const boolldHSCy5 = await EdenCoinsax2nXz.transferFrom.call(addresshaa9zFp, addresspdpVQL5, uintRqwqmyt, {from: accounts[1]});
		const boolhV1y7OF = await EdenCoinsax2nXz.increaseApproval.call(addressvulb4Gl, uintl1v8S2s, {from: accounts[3]});
		const boolMhpLmIX = await EdenCoinsax2nXz.approve.call(addresszbiiRhS, uintV1krNdu, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoino8JKOGE = await EdenCoin.new({from: accounts[3]});
		const uintREoQxA8 = BigInt("167")
		const addressAce0w7i = accounts[4]
		const uintr1ThsrC = BigInt("435")
		const addressYod3VEu = accounts[5]
		const uintHq3071 = BigInt("671")
		const addressEAX5XRO = accounts[1]
		const uintpcn57fJ = BigInt("457")
		const addressp3htZEI = accounts[3]
		const addresss1N2hRq = "0x0000000000000000000000000000000000000001"
		const boolPCFGpW = await EdenCoino8JKOGE.decreaseApproval.call(addressAce0w7i, uintREoQxA8, {from: accounts[4]});
		const booleUjt9qx = await EdenCoino8JKOGE.approve.call(addressYod3VEu, uintr1ThsrC, {from: accounts[3]});
		const boolvkIpL6Z = await EdenCoino8JKOGE.approve.call(addressEAX5XRO, uintHq3071, {from: accounts[2]});
		const boolFOuYwtm = await EdenCoino8JKOGE.transferFrom.call(addresss1N2hRq, addressp3htZEI, uintpcn57fJ, {from: accounts[0]});

		assert.equal(boolPCFGpW, true)
		assert.equal(booleUjt9qx, true)
		assert.equal(boolvkIpL6Z, true)
		await expect(EdenCoino8JKOGE.transferFrom.call(addresss1N2hRq, addressp3htZEI, uintpcn57fJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoint35RXMl = await EdenCoin.new({from: accounts[1]});
		const uintX08erNE = BigInt("1168")
		const addressBMH7IIh = accounts[4]
		const addresszz6IpO3 = accounts[3]
		const addressxlzyowp = accounts[5]
		const boolsxx6dMG = await EdenCoint35RXMl.approve.call(addressBMH7IIh, uintX08erNE, {from: accounts[2]});
		const uint256ZfVaWE = await EdenCoint35RXMl.allowance.call(addressxlzyowp, addresszz6IpO3, {from: accounts[4]});

		assert.equal(boolsxx6dMG, true)
		assert.equal(uint256ZfVaWE, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinSKe0Fzg = await EdenCoin.new({from: accounts[4]});
		const uintpFkWq63 = BigInt("990")
		const addressVgH59y2 = accounts[4]
		const uintXzBvZ7R = BigInt("1861")
		const addresswtGGuUR = accounts[1]
		const boolWu87zZi = await EdenCoinSKe0Fzg.decreaseApproval.call(addressVgH59y2, uintpFkWq63, {from: accounts[5]});
		const booldq5naEH = await EdenCoinSKe0Fzg.increaseApproval.call(addresswtGGuUR, uintXzBvZ7R, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWu87zZi, true)
		assert.equal(booldq5naEH, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinNeieox0 = await EdenCoin.new({from: accounts[0]});
		const addressuPbXhSC = accounts[4]
		const addresseVq6VWP = accounts[4]
		const uintHE7yav2 = BigInt("1834")
		const addressA1eDue = accounts[2]
		const addressaEQtqp2 = accounts[0]
		const uint256RdWqr9L = await EdenCoinNeieox0.allowance.call(addresseVq6VWP, addressuPbXhSC, {from: accounts[1]});
		const boolPrB2dxB = await EdenCoinNeieox0.increaseApproval.call(addressA1eDue, uintHE7yav2, {from: accounts[4]});
		const uint256L1ChQLJ = await EdenCoinNeieox0.balanceOf.call(addressaEQtqp2, {from: accounts[5]});

		assert.equal(boolPrB2dxB, true)
		assert.equal(uint256L1ChQLJ, BigInt("1000000000000000000000000000"))
		assert.equal(uint256RdWqr9L, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoino8JKOGE = await EdenCoin.new({from: accounts[3]});
		const uintziryhy1 = BigInt("0")
		const addressLBA1fOm = accounts[5]
		const uintcGRSp6 = BigInt("1289")
		const address3p0BMp = accounts[2]
		const uintgShhoB = BigInt("785")
		const addressuMyoRwi = accounts[5]
		const uintMTxhY4z = BigInt("913")
		const addressNpLzqZm = accounts[4]
		const addressKiuf9I = accounts[4]
		const addressDKNQkaU = "0x0000000000000000000000000000000000000001"
		const uintI8PGoWW = BigInt("1387")
		const addressvPA9O9 = accounts[0]
		const uintH38G4A3 = BigInt("1438")
		const addressrHJTavi = "0x0000000000000000000000000000000000000001"
		const uinteLFd7VW = BigInt("286")
		const addressySdXwP = accounts[3]
		const uintzoAd1PN = BigInt("111")
		const addressjFzKI5E = accounts[0]
		const uintJ2ZjaGO = BigInt("1568")
		const addressP1HodUn = accounts[1]
		const uintwlpypEd = BigInt("1038")
		const addressDtkpX5 = accounts[1]
		const uint5xzg7G = BigInt("1998")
		const addresstEVGFR = accounts[2]
		const addressxXPTjsE = accounts[3]
		const uintNyTS4iT = BigInt("102")
		const addressZvzLihb = accounts[1]
		const uintO8nIuQs = BigInt("88")
		const addressusZo4c1 = accounts[3]
		const address87H4YF = accounts[2]
		const boolPCFGpW = await EdenCoino8JKOGE.decreaseApproval.call(addressLBA1fOm, uintziryhy1, {from: accounts[4]});
		const boolGeHfaPz = await EdenCoino8JKOGE.transfer.call(address3p0BMp, uintcGRSp6, {from: accounts[3]});
		const boolSoPsFhj = await EdenCoino8JKOGE.increaseApproval.call(addressuMyoRwi, uintgShhoB, {from: accounts[0]});
		const booltAdx91U = await EdenCoino8JKOGE.decreaseApproval.call(addressNpLzqZm, uintMTxhY4z, {from: accounts[1]});
		const uint256hxaj6TJ = await EdenCoino8JKOGE.allowance.call(addressDKNQkaU, addressKiuf9I, {from: accounts[1]});
		const boolsLNUQhG = await EdenCoino8JKOGE.approve.call(addressvPA9O9, uintI8PGoWW, {from: accounts[0]});
		const boolWEvmXhc = await EdenCoino8JKOGE.increaseApproval.call(addressrHJTavi, uintH38G4A3, {from: accounts[3]});
		const boolLXNVrDO = await EdenCoino8JKOGE.approve.call(addressySdXwP, uinteLFd7VW, {from: accounts[3]});
		const boolHMqa3cc = await EdenCoino8JKOGE.increaseApproval.call(addressjFzKI5E, uintzoAd1PN, {from: accounts[4]});
		const boolZw9gMRb = await EdenCoino8JKOGE.decreaseApproval.call(addressP1HodUn, uintJ2ZjaGO, {from: accounts[0]});
		const boolhMoAR5o = await EdenCoino8JKOGE.approve.call(addressDtkpX5, uintwlpypEd, {from: accounts[2]});
		const boolpTH3AGE = await EdenCoino8JKOGE.transferFrom.call(addressxXPTjsE, addresstEVGFR, uint5xzg7G, {from: accounts[1]});
		const boolFD4MjMt = await EdenCoino8JKOGE.increaseApproval.call(addressZvzLihb, uintNyTS4iT, {from: accounts[4]});
		const boolKg5JzGb = await EdenCoino8JKOGE.transferFrom.call(address87H4YF, addressusZo4c1, uintO8nIuQs, {from: accounts[2]});

		assert.equal(boolGeHfaPz, true)
		assert.equal(boolHMqa3cc, true)
		assert.equal(boolLXNVrDO, true)
		assert.equal(boolPCFGpW, true)
		assert.equal(boolSoPsFhj, true)
		assert.equal(boolWEvmXhc, true)
		assert.equal(boolZw9gMRb, true)
		assert.equal(boolhMoAR5o, true)
		assert.equal(boolsLNUQhG, true)
		assert.equal(booltAdx91U, true)
		assert.equal(uint256hxaj6TJ, BigInt("0"))
		await expect(EdenCoino8JKOGE.transferFrom.call(addressxXPTjsE, addresstEVGFR, uint5xzg7G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})