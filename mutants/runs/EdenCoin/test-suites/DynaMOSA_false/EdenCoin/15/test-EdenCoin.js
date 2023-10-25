const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoincjR8YPD = await EdenCoin.new({from: accounts[2]});
		const uintA7ykuGY = BigInt("1414")
		const addressNV9y1V = accounts[0]
		const addressDWcZiu1 = accounts[0]
		const addressCJtlT3y = accounts[0]
		const uinttfrPbb1 = BigInt("414")
		const addressol0wAML = accounts[0]
		const addressG7VM49 = accounts[2]
		const uintYDUoVk = BigInt("1483")
		const addressd6Gxe4l = accounts[4]
		const uintLebyR6Q = BigInt("641")
		const addressZd5UQ1 = accounts[0]
		const boolqHSstvf = await EdenCoincjR8YPD.transferFrom.call(addressDWcZiu1, addressNV9y1V, uintA7ykuGY, {from: accounts[2]});
		const uint256yp9NVW = await EdenCoincjR8YPD.balanceOf.call(addressCJtlT3y, {from: accounts[3]});
		const boolqLIJrE = await EdenCoincjR8YPD.transferFrom.call(addressG7VM49, addressol0wAML, uinttfrPbb1, {from: accounts[1]});
		const boolfC9BBru = await EdenCoincjR8YPD.increaseApproval.call(addressd6Gxe4l, uintYDUoVk, {from: accounts[3]});
		const boolKNcs9xM = await EdenCoincjR8YPD.approve.call(addressZd5UQ1, uintLebyR6Q, {from: accounts[2]});

		await expect(EdenCoincjR8YPD.transferFrom.call(addressDWcZiu1, addressNV9y1V, uintA7ykuGY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinl7n15xd = await EdenCoin.new({from: accounts[3]});
		const uintacWTUCJ = BigInt("108")
		const addressVwfVJO6 = accounts[0]
		const uintkEQNQah = BigInt("1558")
		const addressGKwgQtz = accounts[4]
		const uintvJtzLpM = BigInt("1024")
		const addressVpmOS6g = accounts[3]
		const addressINf9XGT = accounts[5]
		const addressP6KNJH = accounts[2]
		const addressx8VJG36 = accounts[5]
		const uintrnPPHlr = BigInt("13")
		const addressRkWOu3Q = accounts[5]
		const boolU56N0eR = await EdenCoinl7n15xd.transfer.call(addressVwfVJO6, uintacWTUCJ, {from: accounts[3]});
		const boolJKYAPbo = await EdenCoinl7n15xd.increaseApproval.call(addressGKwgQtz, uintkEQNQah, {from: accounts[4]});
		const boolASLfRpT = await EdenCoinl7n15xd.approve.call(addressVpmOS6g, uintvJtzLpM, {from: accounts[3]});
		const uint256OAN757L = await EdenCoinl7n15xd.allowance.call(addressP6KNJH, addressINf9XGT, {from: accounts[5]});
		const uint256eEpbp0x = await EdenCoinl7n15xd.balanceOf.call(addressx8VJG36, {from: accounts[3]});
		const boolYbH31MY = await EdenCoinl7n15xd.increaseApproval.call(addressRkWOu3Q, uintrnPPHlr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolASLfRpT, true)
		assert.equal(boolJKYAPbo, true)
		assert.equal(boolU56N0eR, true)
		assert.equal(boolYbH31MY, true)
		assert.equal(uint256OAN757L, BigInt("0"))
		assert.equal(uint256eEpbp0x, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinJnsGx3L = await EdenCoin.new({from: accounts[5]});
		const uintHKWDeS6 = BigInt("736")
		const addresss1MVnsJ = accounts[1]
		const uintBIq7qtr = BigInt("1303")
		const address5gScvF = accounts[4]
		const uintOmbJEn = BigInt("1012")
		const address7BMo85 = accounts[1]
		const uintQ4rnHiM = BigInt("1693")
		const addressyEI4gIX = accounts[4]
		const addressf07CZgG = accounts[3]
		const booleAR3CVG = await EdenCoinJnsGx3L.decreaseApproval.call(addresss1MVnsJ, uintHKWDeS6, {from: accounts[1]});
		const boolUli4Hj7 = await EdenCoinJnsGx3L.increaseApproval.call(address5gScvF, uintBIq7qtr, {from: accounts[1]});
		const boolMe7YcAs = await EdenCoinJnsGx3L.decreaseApproval.call(address7BMo85, uintOmbJEn, {from: accounts[3]});
		const boollNbhzRk = await EdenCoinJnsGx3L.decreaseApproval.call(addressyEI4gIX, uintQ4rnHiM, {from: accounts[4]});
		const uint256uucm3ER = await EdenCoinJnsGx3L.balanceOf.call(addressf07CZgG, {from: accounts[2]});

		assert.equal(boolMe7YcAs, true)
		assert.equal(boolUli4Hj7, true)
		assert.equal(booleAR3CVG, true)
		assert.equal(boollNbhzRk, true)
		assert.equal(uint256uucm3ER, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinm7s8TjO = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgLUKCj = BigInt("1891")
		const addressm62wUiE = accounts[1]
		const uintd0udiIL = BigInt("1264")
		const addressTsQ42U8 = accounts[0]
		const addressjUSITkk = "0x0000000000000000000000000000000000000001"
		const addresscfXt9px = accounts[0]
		const boolf8mtoe = await EdenCoinm7s8TjO.increaseApproval.call(addressm62wUiE, uintgLUKCj, {from: accounts[2]});
		const boolwqYTINL = await EdenCoinm7s8TjO.increaseApproval.call(addressTsQ42U8, uintd0udiIL, {from: accounts[0]});
		const uint256uiY9BUg = await EdenCoinm7s8TjO.allowance.call(addresscfXt9px, addressjUSITkk, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinxMRSG7P = await EdenCoin.new({from: accounts[0]});
		const addressXgzQaW = accounts[0]
		const addressp8bScXb = accounts[3]
		const uintG7mG8Hf = BigInt("0")
		const addressxdwVe5J = accounts[1]
		const uintKBSexPk = BigInt("1425")
		const addressvdVqbE = accounts[0]
		const uintXvgnpww = BigInt("1563")
		const addressdiPjPV = accounts[5]
		const uintajI9LAh = BigInt("677")
		const addressGKJbXQ = accounts[5]
		const uintO6JI2UT = BigInt("1151")
		const addressAfpNikW = accounts[3]
		const uint256wZZ2tcK = await EdenCoinxMRSG7P.allowance.call(addressp8bScXb, addressXgzQaW, {from: accounts[5]});
		const boolXaNWrDn = await EdenCoinxMRSG7P.decreaseApproval.call(addressxdwVe5J, uintG7mG8Hf, {from: accounts[5]});
		const boolmKeiKDj = await EdenCoinxMRSG7P.increaseApproval.call(addressvdVqbE, uintKBSexPk, {from: "0x0000000000000000000000000000000000000001"});
		const boolvNcbQr0 = await EdenCoinxMRSG7P.approve.call(addressdiPjPV, uintXvgnpww, {from: accounts[2]});
		const booli7JQCxW = await EdenCoinxMRSG7P.increaseApproval.call(addressGKJbXQ, uintajI9LAh, {from: accounts[1]});
		const bool2qHqrU = await EdenCoinxMRSG7P.approve.call(addressAfpNikW, uintO6JI2UT, {from: accounts[2]});

		assert.equal(bool2qHqrU, true)
		assert.equal(boolXaNWrDn, true)
		assert.equal(booli7JQCxW, true)
		assert.equal(boolmKeiKDj, true)
		assert.equal(boolvNcbQr0, true)
		assert.equal(uint256wZZ2tcK, BigInt("0"))
	});
})