const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinpq8Iso3 = await FreakCoin.new({from: accounts[0]});
		const uintxxpOZhW = BigInt("1812")
		const addressdGc9PKq = accounts[3]
		const addressWAMRHV1 = accounts[0]
		const addressMCt4csh = "0x0000000000000000000000000000000000000001"
		const boolBbrDka = await FreakCoinpq8Iso3.approve.call(addressdGc9PKq, uintxxpOZhW, {from: accounts[4]});
		const uint256evgQc4C = await FreakCoinpq8Iso3.balanceOf.call(addressWAMRHV1, {from: accounts[0]});
		const addressCevrorb = await FreakCoinpq8Iso3.setUniswapAddress.call(addressMCt4csh, {from: accounts[0]});

		assert.equal(boolBbrDka, true)
		assert.equal(uint256evgQc4C, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinkYV2kw = await FreakCoin.new({from: accounts[0]});
		const addresse6QK42C = accounts[4]
		const addressDxZeP7 = accounts[1]
		const uintpHdrGZO = BigInt("568")
		const addressei0kC1B = accounts[2]
		const addressg31lWMA = accounts[0]
		const addressaCCzLGg = accounts[5]
		const addressGtClRlJ = accounts[0]
//		const uint256GfvIjt7 = await FreakCoinkYV2kw.allUserBalances.call(addresse6QK42C, {from: accounts[3]});
//		const uint256FV266M = await FreakCoinkYV2kw.balanceOf.call(addressDxZeP7, {from: accounts[2]});
//		const booljMKRshA = await FreakCoinkYV2kw.transfer.call(addressei0kC1B, uintpHdrGZO, {from: accounts[2]});
//		const uint256hFqcBq4 = await FreakCoinkYV2kw.allowance.call(addressaCCzLGg, addressg31lWMA, {from: accounts[2]});
//		const uint256H7j9wmA = await FreakCoinkYV2kw.allUserBalances.call(addressGtClRlJ, {from: accounts[3]});

		await expect(FreakCoinkYV2kw.allUserBalances.call(addresse6QK42C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinSa66CbC = await FreakCoin.new({from: accounts[1]});
		const addressP9h4uGR = "0x0000000000000000000000000000000000000001"
		const uintn2jLiIq = BigInt("812")
		const addressZDwkHF = accounts[4]
		const addressVJeCFN7 = accounts[3]
		const uint256circzcQ = await FreakCoinSa66CbC.balanceOf.call(addressP9h4uGR, {from: accounts[0]});
//		const boolQZwtGab = await FreakCoinSa66CbC.transferFrom.call(addressVJeCFN7, addressZDwkHF, uintn2jLiIq, {from: accounts[0]});

		assert.equal(uint256circzcQ, BigInt("0"))
		await expect(FreakCoinSa66CbC.transferFrom.call(addressVJeCFN7, addressZDwkHF, uintn2jLiIq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVpxUbDD = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPA9zWCZ = accounts[4]
		const addressYXI82f9 = accounts[2]
		const addressTZvnbB4 = accounts[5]
		const addressTNeQdSc = accounts[2]
		const uint256zmRyFU1 = await FreakCoinVpxUbDD.allowance.call(addressYXI82f9, addressPA9zWCZ, {from: accounts[4]});
		const uint256NmiBlos = await FreakCoinVpxUbDD.balanceOf.call(addressTZvnbB4, {from: accounts[0]});
		const uint256e4JrnZP = await FreakCoinVpxUbDD.balanceOf.call(addressTNeQdSc, {from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoing1mvtF = await FreakCoin.new({from: accounts[1]});
		const addressVCBXGzg = accounts[1]
		const uintgzmKza = BigInt("1554")
		const addressRE8s66k = accounts[5]
		const addressJVL790 = accounts[1]
		const uintO32fdz5 = BigInt("1114")
		const addressXAbvWS = accounts[5]
		const uint256OXtSLE = await FreakCoing1mvtF.balanceOf.call(addressVCBXGzg, {from: accounts[4]});
		const addressq0SnKu1 = await FreakCoing1mvtF.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});
//		const booleElBRoD = await FreakCoing1mvtF.transferFrom.call(addressJVL790, addressRE8s66k, uintgzmKza, {from: accounts[2]});
//		const boolwl9NAat = await FreakCoing1mvtF.approve.call(addressXAbvWS, uintO32fdz5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressq0SnKu1, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256OXtSLE, BigInt("1000000"))
		await expect(FreakCoing1mvtF.transferFrom.call(addressJVL790, addressRE8s66k, uintgzmKza, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinZoV2YYl = await FreakCoin.new({from: accounts[2]});
		const address7EQL3d = accounts[1]
		const addressIHn5XnS = accounts[3]
		const uint06MvEf = BigInt("1354")
		const addressPnjTuOQ = accounts[0]
		const uintzoeUF4D = BigInt("1240")
		const addressRs5zY1U = accounts[3]
		const addressbo7vPPU = accounts[3]
		const uint256gub3tYH = await FreakCoinZoV2YYl.allowance.call(addressIHn5XnS, address7EQL3d, {from: accounts[2]});
//		const boolFMmUb4 = await FreakCoinZoV2YYl.transfer.call(addressPnjTuOQ, uint06MvEf, {from: accounts[1]});
//		const booll8gRo4V = await FreakCoinZoV2YYl.transferFrom.call(addressbo7vPPU, addressRs5zY1U, uintzoeUF4D, {from: accounts[2]});
//		const addressWJPNCvs = await FreakCoinZoV2YYl.uniswapAddress.call({from: accounts[2]});

		assert.equal(uint256gub3tYH, BigInt("0"))
		await expect(FreakCoinZoV2YYl.transfer.call(addressPnjTuOQ, uint06MvEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxmKXWIV = await FreakCoin.new({from: accounts[1]});
		const addressqaU75Hk = accounts[4]
		const addressQO65EDc = accounts[4]
		const uintg3aKwf0 = BigInt("457")
		const addressnE13HPu = accounts[4]
		const uint7qGNHe = BigInt("979")
		const addresscYJyRFr = accounts[3]
		const addressuUO2IWj = accounts[3]
		const addressETDErj = accounts[3]
		const addressBYoHO4T = accounts[5]
		const uint256OaLqTkN = await FreakCoinxmKXWIV.allowance.call(addressQO65EDc, addressqaU75Hk, {from: accounts[2]});
		const booluMGkPwq = await FreakCoinxmKXWIV.transfer.call(addressnE13HPu, uintg3aKwf0, {from: accounts[1]});
//		const boolKPa9LW2 = await FreakCoinxmKXWIV.transfer.call(addresscYJyRFr, uint7qGNHe, {from: accounts[4]});
//		const uint256B44xOBN = await FreakCoinxmKXWIV.totalSupply.call({from: accounts[0]});
//		const uint25676gEh6 = await FreakCoinxmKXWIV.allUserBalances.call(addressuUO2IWj, {from: accounts[3]});
//		const uint256PnWgIv7 = await FreakCoinxmKXWIV.allowance.call(addressBYoHO4T, addressETDErj, {from: accounts[3]});

		assert.equal(booluMGkPwq, true)
		assert.equal(uint256OaLqTkN, BigInt("0"))
		await expect(FreakCoinxmKXWIV.transfer.call(addresscYJyRFr, uint7qGNHe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoincS15Yv = await FreakCoin.new({from: accounts[3]});
		const addressG63zDvR = accounts[4]
		const addressDBtnoKT = accounts[5]
		const uintYvD8Nma = BigInt("1772")
		const addressNijOG9K = accounts[3]
		const uint256ULl367E = await FreakCoincS15Yv.allowance.call(addressDBtnoKT, addressG63zDvR, {from: accounts[1]});
		const addressKLmwVNO = await FreakCoincS15Yv.uniswapAddress.call({from: accounts[0]});
		const boolwiyg3yB = await FreakCoincS15Yv.transfer.call(addressNijOG9K, uintYvD8Nma, {from: accounts[3]});

		assert.equal(addressKLmwVNO, 0x0000000000000000000000000000000000000000)
		assert.equal(boolwiyg3yB, true)
		assert.equal(uint256ULl367E, BigInt("0"))
	});
})