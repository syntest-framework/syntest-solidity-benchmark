const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringUkdMSNL = "EGbgbtcqARZqIzYMw71nHNCet5uaEruLNJvRUvn9hBDcYOO8WtVloQjBOgCzTV9ehdq0ikQLqUX4CvTty"
		const addresscSDz5ZB = accounts[3]
		const addressD5G5t9j = accounts[1]
		const uintfku4NN = BigInt("1626")
		const uintJ5WteuA = BigInt("1326")
		const Liquidity_v8CHNWm34 = await Liquidity_v8.new(stringUkdMSNL, addresscSDz5ZB, addressD5G5t9j, uintfku4NN, uintJ5WteuA, {from: "0x0000000000000000000000000000000000000001"});
		const uintwdHPJP7 = BigInt("1467")
		const addressssoOPIV = accounts[0]
		const addressaAz9nES = accounts[4]
		const uint64Y3Qo9m1 = await Liquidity_v8CHNWm34.setRate.call(uintwdHPJP7, {from: accounts[4]});
		const uint256XSB9LRi = await Liquidity_v8CHNWm34.calculate.call(addressssoOPIV, {from: accounts[3]});
		const 
zR5oc1f = await Liquidity_v8CHNWm34.userDeposits.call(addressaAz9nES, {from: accounts[2]});
		await Liquidity_v8CHNWm34.onlyOwner.call({from: accounts[1]});
		const boolWUpZVpw = await Liquidity_v8CHNWm34.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressy3R87TY = accounts[0]
		const addresspnHE3T4 = accounts[5]
		const uintSdJFeRb = BigInt("228")
		const uintnqxyNr = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressy3R87TY, addresspnHE3T4, uintSdJFeRb, uintnqxyNr, {from: accounts[4]});
		const addressB32C5v = accounts[3]
		const uintIJvmRiO = BigInt("1644")
		const addressY53pynQ = accounts[1]
		const 
hMO3gX = await Liquidity_v8UJb7PUV._hasAllowance.call(addressY53pynQ, uintIJvmRiO, addressB32C5v, {from: accounts[5]});
		const booliud2iM1 = await Liquidity_v8UJb7PUV.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringKR08qCM = "pBSw1O95OnpcHmEulxH5t5tg8"
		const addressw4injfB = accounts[0]
		const addressh6yegUA = accounts[2]
		const uintOR5c6J3 = BigInt("1669")
		const uintuOeLt3R = BigInt("860")
		const Liquidity_v8Rq5SB0o = await Liquidity_v8.new(stringKR08qCM, addressw4injfB, addressh6yegUA, uintOR5c6J3, uintuOeLt3R, {from: accounts[1]});
		const uintzXdq7i1 = BigInt("235")
		const addressgJDN7p = accounts[2]
		const uint64AFh7RK = await Liquidity_v8Rq5SB0o.setRate.call(uintzXdq7i1, {from: accounts[2]});
		const uint256G1DsOwZ = await Liquidity_v8Rq5SB0o.calculate.call(addressgJDN7p, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringO8tESB = "f3cWQJCFCo2ReJl8vh4futaCQu6yIpyQAIfgsjEadmJ1tjRHCRbWJvv5qOBde0N5zBFXuE3j1fRGn"
		const addressUOYrAWY = accounts[4]
		const addressgJZnBDA = accounts[3]
		const uintv2UZMWK = BigInt("1973")
		const uintqUEhtiI = BigInt("1600")
		const Liquidity_v8wyU7MG = await Liquidity_v8.new(stringO8tESB, addressUOYrAWY, addressgJZnBDA, uintv2UZMWK, uintqUEhtiI, {from: accounts[5]});
		const uintDRq3kEr = BigInt("1537")
		const uintcSlBnKL = BigInt("1681")
		const addressMBdZca6 = accounts[3]
		const uintmX47lkQ = BigInt("158")
		const addressil4ZFAU = accounts[2]
		const addressX8y7PaZ = accounts[2]
		const boolgIfFdDR = await Liquidity_v8wyU7MG.stake.call(uintDRq3kEr, {from: accounts[5]});
		const uint64A5arb0t = await Liquidity_v8wyU7MG.setRate.call(uintcSlBnKL, {from: accounts[2]});
		await Liquidity_v8wyU7MG.onlyOwner.call({from: accounts[3]});
		const booluolZHgk = await Liquidity_v8wyU7MG.withdraw.call({from: accounts[3]});
		const 
FkR7bY = await Liquidity_v8wyU7MG._hasAllowance.call(addressil4ZFAU, uintmX47lkQ, addressMBdZca6, {from: accounts[1]});
		const uint256Ris5Vp4 = await Liquidity_v8wyU7MG.calculate.call(addressX8y7PaZ, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringhnCrDw = "klDoXpNks8KlZKSOApnu7PhmLYyQYKIDUETk1e9QKzc7YGisGAiGJOrmd59gx"
		const addressUjukFp = accounts[1]
		const addressxCX7qP = accounts[0]
		const uintTi8GIAv = BigInt("1848")
		const uintv9zdljl = BigInt("960")
		const Liquidity_v8AuOpgGR = await Liquidity_v8.new(stringhnCrDw, addressUjukFp, addressxCX7qP, uintTi8GIAv, uintv9zdljl, {from: accounts[4]});
		const uintXP3z6Em = BigInt("1628")
		const addressEDDaYQ = await Liquidity_v8AuOpgGR.owner.call({from: accounts[3]});
		const boolHxddkP3 = await Liquidity_v8AuOpgGR.stake.call(uintXP3z6Em, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringz36uszl = "tU9kGxYP5VAuQ4osMsRwgmG24qEWSQmRyppmoWmK2mbriolZlpnLXpnEYaMQ2pwmhzu9u7rOpryTUdLsl9p8r2wKKA8ZBC1H"
		const addressjSRFFdN = accounts[4]
		const addressygjIizG = accounts[4]
		const uintiKDlFxe = BigInt("443")
		const uinttvjWLD = BigInt("1963")
		const Liquidity_v8y1JQnGC = await Liquidity_v8.new(stringz36uszl, addressjSRFFdN, addressygjIizG, uintiKDlFxe, uinttvjWLD, {from: accounts[2]});
		const addresswHd95fh = "0x0000000000000000000000000000000000000001"
		const boolcg4Cng7 = await Liquidity_v8y1JQnGC.isOwner.call({from: accounts[0]});
		const booljBlNW70 = await Liquidity_v8y1JQnGC.isOwner.call({from: accounts[4]});
		const bool4UeDD0 = await Liquidity_v8y1JQnGC.isOwner.call({from: accounts[2]});
		const uint256ct8SBMr = await Liquidity_v8y1JQnGC.calculate.call(addresswHd95fh, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressLKHVlA = accounts[0]
		const addressmj7i87h = accounts[5]
		const uintZIfznkM = BigInt("228")
		const uintfuOqSyB = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressLKHVlA, addressmj7i87h, uintZIfznkM, uintfuOqSyB, {from: accounts[4]});
		const booliud2iM1 = await Liquidity_v8UJb7PUV.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringz36uszl = "tU9kGxYP5VAuQ4osMsRwgmG24qEWSQmRyppmoWmK2mbriolZlpnLXpnEYaMQ2pwmhzu9u7rOpryTUdLsl9p8r2wKKA8ZBC1H"
		const addressz3fWGE6 = accounts[4]
		const addresslclWQeh = accounts[4]
		const uintzWCoCfj = BigInt("443")
		const uintc10iaSI = BigInt("1963")
		const Liquidity_v8y1JQnGC = await Liquidity_v8.new(stringz36uszl, addressz3fWGE6, addresslclWQeh, uintzWCoCfj, uintc10iaSI, {from: accounts[2]});
		const addressgpcQ49B = "0x0000000000000000000000000000000000000001"
		const boolcg4Cng7 = await Liquidity_v8y1JQnGC.isOwner.call({from: accounts[0]});
		const booljBlNW70 = await Liquidity_v8y1JQnGC.isOwner.call({from: accounts[4]});
		const addressXTUp58s = await Liquidity_v8y1JQnGC.owner.call({from: accounts[5]});
		const uint256ct8SBMr = await Liquidity_v8y1JQnGC.calculate.call(addressgpcQ49B, {from: accounts[3]});
		const boolwqsASGx = await Liquidity_v8y1JQnGC.withdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressGJSNfW = accounts[0]
		const addressST6OcSZ = accounts[5]
		const uintqbHDJhl = BigInt("228")
		const uintQienr7q = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressGJSNfW, addressST6OcSZ, uintqbHDJhl, uintQienr7q, {from: accounts[4]});
		const addressbPxhkF5 = accounts[2]
		const uintrf9duI5 = BigInt("1220")
		const addressPnJGCb = accounts[3]
		const uintIeR7FGq = BigInt("1660")
		const addressde2CHaK = accounts[0]
		const 
ICiDZ0x = await Liquidity_v8UJb7PUV.userDeposits.call(addressbPxhkF5, {from: accounts[3]});
		const uint256NuXI8kp = await Liquidity_v8UJb7PUV.changeLockDuration.call(uintrf9duI5, {from: "0x0000000000000000000000000000000000000001"});
		const 
hMO3gX = await Liquidity_v8UJb7PUV._hasAllowance.call(addressde2CHaK, uintIeR7FGq, addressPnJGCb, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressTRowTir = accounts[0]
		const addresstGkyhuF = accounts[5]
		const uintJvisgaR = BigInt("228")
		const uintJkwzCZu = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressTRowTir, addresstGkyhuF, uintJvisgaR, uintJkwzCZu, {from: accounts[4]});
		const uint9qrmIC = BigInt("1321")
		const uint64XvkPQ2 = await Liquidity_v8UJb7PUV.setRate.call(uint9qrmIC, {from: accounts[4]});
		const booliud2iM1 = await Liquidity_v8UJb7PUV.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressz66FRql = accounts[0]
		const addressz8PM279 = accounts[5]
		const uintSncN3Zv = BigInt("228")
		const uintwLZlhVG = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressz66FRql, addressz8PM279, uintSncN3Zv, uintwLZlhVG, {from: accounts[4]});
		const addressSDztncD = accounts[1]
		const addressI01XL5J = accounts[4]
		const uintTB9eJc = BigInt("1669")
		const addressAylfeRm = accounts[5]
		const addressiVak0wC = accounts[4]
		const addresst7HY5mh = await Liquidity_v8UJb7PUV.transferOwnership.call(addressSDztncD, {from: accounts[4]});
		const 
hMO3gX = await Liquidity_v8UJb7PUV._hasAllowance.call(addressAylfeRm, uintTB9eJc, addressI01XL5J, {from: accounts[5]});
		const uint256ZiUR0cw = await Liquidity_v8UJb7PUV.calculate.call(addressiVak0wC, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addresseAmMQQ = accounts[0]
		const addressg9Dcc60 = accounts[5]
		const uintNQlv7HD = BigInt("228")
		const uintQiRpwVs = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addresseAmMQQ, addressg9Dcc60, uintNQlv7HD, uintQiRpwVs, {from: accounts[4]});
		const addressodxx0In = "0x0000000000000000000000000000000000000002"
		const 
oJkCzY7 = await Liquidity_v8UJb7PUV.userDeposits.call(addressodxx0In, {from: accounts[0]});
		await Liquidity_v8UJb7PUV.renounceOwnership.call({from: accounts[4]});
		const boolc6I0VDS = await Liquidity_v8UJb7PUV.withdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqyg9y7F = "LeGlFFV0vkEF3aq1ZrCaYaKCGiZXnACHIAxpdPaGBjU4f9fyt3AJ9HY4Y"
		const addressZFNENgw = accounts[0]
		const addressocMtNUo = accounts[5]
		const uintQuoGTnw = BigInt("228")
		const uintfKsIOEd = BigInt("351")
		const Liquidity_v8UJb7PUV = await Liquidity_v8.new(stringqyg9y7F, addressZFNENgw, addressocMtNUo, uintQuoGTnw, uintfKsIOEd, {from: accounts[4]});
		const uintNGclQP = BigInt("142")
		const addressPoRbD8J = accounts[3]
		const uinteYOIjWJ = BigInt("1671")
		const addressiPeKKS0 = accounts[0]
		const uint256wDhFlC = await Liquidity_v8UJb7PUV.changeLockDuration.call(uintNGclQP, {from: accounts[4]});
		const boolO13GR38 = await Liquidity_v8UJb7PUV.withdraw.call({from: accounts[0]});
		const 
hMO3gX = await Liquidity_v8UJb7PUV._hasAllowance.call(addressiPeKKS0, uinteYOIjWJ, addressPoRbD8J, {from: accounts[5]});
	});
})