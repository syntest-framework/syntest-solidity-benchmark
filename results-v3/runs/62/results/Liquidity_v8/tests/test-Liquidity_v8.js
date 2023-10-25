const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringWoG9nZi = "9WkRuQaj495oj2RTaVqVWhYYJfnvHlR80ynApVBKfEO8xQxNwAsyrrhmTZBzRj7YLT9E5EPQSl"
		const addressXKvqCC = accounts[0]
		const addressB8Ws47x = "0x0000000000000000000000000000000000000001"
		const uintR6ssAGo = BigInt("872")
		const uintQF1Kin3 = BigInt("1830")
		const Liquidity_v8Lt3mSWU = await Liquidity_v8.new(stringWoG9nZi, addressXKvqCC, addressB8Ws47x, uintR6ssAGo, uintQF1Kin3, {from: accounts[3]});
		const addresssJJtCZI = accounts[5]
		const uintCgQVrmE = BigInt("1734")
		const addressgU8j8FW = accounts[0]
		const uintZtiqs8C = BigInt("1433")
		const boolXW8MDZG = await Liquidity_v8Lt3mSWU.isOwner.call({from: accounts[4]});
		const 
on09Jbp = await Liquidity_v8Lt3mSWU.userDeposits.call(addresssJJtCZI, {from: accounts[3]});
		const uint64cZrX1sp = await Liquidity_v8Lt3mSWU.setRate.call(uintCgQVrmE, {from: accounts[2]});
		const 
TYdPAgL = await Liquidity_v8Lt3mSWU.userDeposits.call(addressgU8j8FW, {from: accounts[0]});
		const uint64P1ioOkv = await Liquidity_v8Lt3mSWU.setRate.call(uintZtiqs8C, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressFpeG3r = accounts[0]
		const addressp1ZIzk7 = accounts[2]
		const uintr7wvNtr = BigInt("1117")
		const uintU010nsi = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressFpeG3r, addressp1ZIzk7, uintr7wvNtr, uintU010nsi, {from: accounts[4]});
		const addresshnwZYve = "0x0000000000000000000000000000000000000001"
		const uintpD08hS = BigInt("933")
		const uint256yXjXS2C = await Liquidity_v8w8dGuUN.calculate.call(addresshnwZYve, {from: accounts[4]});
		const uint64bAxzzFw = await Liquidity_v8w8dGuUN.setRate.call(uintpD08hS, {from: accounts[2]});
		await Liquidity_v8w8dGuUN.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgisN391 = "Wpx9zYIq7VGhM0v8qQ52jgbhEIsARldCYgAXIRoF8zvZv4dCWC3dq80Hw2Wy1iDT0ufXx8Iy5AzsaWOe"
		const addressjP8ak5 = accounts[0]
		const addressq56Ao2u = accounts[3]
		const uintz6poB5R = BigInt("1996")
		const uintWIMPEMj = BigInt("264")
		const Liquidity_v8uTGuVsi = await Liquidity_v8.new(stringgisN391, addressjP8ak5, addressq56Ao2u, uintz6poB5R, uintWIMPEMj, {from: accounts[4]});
		const addressUjrfYW6 = accounts[1]
		const addressdBYkSFX = accounts[4]
		const uintNvc27Ze = BigInt("1798")
		const addressJGAdJFR = accounts[0]
		const uintIod1TIY = BigInt("89")
		const uint256Wl5N69n = await Liquidity_v8uTGuVsi.calculate.call(addressUjrfYW6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xFb29GY = await Liquidity_v8uTGuVsi.calculate.call(addressdBYkSFX, {from: accounts[1]});
		const boolEFxeC0G = await Liquidity_v8uTGuVsi.stake.call(uintNvc27Ze, {from: accounts[3]});
		const 
uP1by2e = await Liquidity_v8uTGuVsi.userDeposits.call(addressJGAdJFR, {from: accounts[1]});
		const uint64NEHTpvL = await Liquidity_v8uTGuVsi.setRate.call(uintIod1TIY, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJBWcH5 = "I9UzaZ"
		const addressqE7fKX = accounts[3]
		const addressh9tb9pu = accounts[1]
		const uintDy4NY1V = BigInt("1990")
		const uintijxeAFm = BigInt("977")
		const Liquidity_v8TeL8T1N = await Liquidity_v8.new(stringJBWcH5, addressqE7fKX, addressh9tb9pu, uintDy4NY1V, uintijxeAFm, {from: accounts[3]});
		const uintW7SwBYH = BigInt("1206")
		const addresswgHaMX = accounts[2]
		const addressiIoMnQf = accounts[2]
		const addresssvxa1T5 = await Liquidity_v8TeL8T1N.owner.call({from: accounts[2]});
		const boolJhMhI9H = await Liquidity_v8TeL8T1N.stake.call(uintW7SwBYH, {from: accounts[3]});
		const addressDle5NoA = await Liquidity_v8TeL8T1N.transferOwnership.call(addresswgHaMX, {from: "0x0000000000000000000000000000000000000001"});
		const address6vcn2C = await Liquidity_v8TeL8T1N.transferOwnership.call(addressiIoMnQf, {from: accounts[2]});
		await Liquidity_v8TeL8T1N.onlyOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringSAsaS3m = "XAazIDNhaCcQeXdZ21ZOBsOJy61sxoDMbWuOFl7srr6ABXfWabL5M2dVAJTiVD95LA3e2OO"
		const addressrx3u4ya = accounts[1]
		const addressiVMqAKG = accounts[2]
		const uintgDSQvh = BigInt("1675")
		const uintf7JCGy = BigInt("617")
		const Liquidity_v8fFr7cz9 = await Liquidity_v8.new(stringSAsaS3m, addressrx3u4ya, addressiVMqAKG, uintgDSQvh, uintf7JCGy, {from: accounts[4]});
		const addresskDk3tPt = accounts[3]
		const uintGa2iif1 = BigInt("623")
		const addressxR4TsnV = accounts[2]
		const addressKhANza = "0x0000000000000000000000000000000000000001"
		const uint256HnczBi = await Liquidity_v8fFr7cz9.calculate.call(addresskDk3tPt, {from: accounts[0]});
		const boolTwPEb6g = await Liquidity_v8fFr7cz9.emergencyWithdraw.call({from: accounts[0]});
		const uint256QQIZXMH = await Liquidity_v8fFr7cz9.changeLockDuration.call(uintGa2iif1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e2bjWlo = await Liquidity_v8fFr7cz9.calculate.call(addressxR4TsnV, {from: accounts[2]});
		const uint256jnoQUxX = await Liquidity_v8fFr7cz9.calculate.call(addressKhANza, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringYW2PosS = "PtKoKSaak3FWlS2nbrcu18lTUXVntS1CksO94dgqF2clQng6NO4sik1wH2IffvX82UawPEoQ9oLIt4q1Sprv0dRnmUOjJed"
		const addressPFmRp1E = accounts[2]
		const addressLSAOELs = accounts[0]
		const uintX8lDSWa = BigInt("262")
		const uinthLATCi = BigInt("1889")
		const Liquidity_v8wFqev0Q = await Liquidity_v8.new(stringYW2PosS, addressPFmRp1E, addressLSAOELs, uintX8lDSWa, uinthLATCi, {from: accounts[0]});
		const addressHIS7lQY = accounts[3]
		const uintWCQKm17 = BigInt("565")
		const addressl7qR24 = accounts[4]
		const addressNABguIS = "0x0000000000000000000000000000000000000001"
		const 
T6OfMdI = await Liquidity_v8wFqev0Q._hasAllowance.call(addressl7qR24, uintWCQKm17, addressHIS7lQY, {from: accounts[5]});
		const boolt010C2 = await Liquidity_v8wFqev0Q.withdraw.call({from: accounts[4]});
		const uint256eD11xTg = await Liquidity_v8wFqev0Q.calculate.call(addressNABguIS, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressv6Ogrde = accounts[0]
		const addressAPL902R = accounts[2]
		const uintyBiAtch = BigInt("1117")
		const uintSbmVRIk = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressv6Ogrde, addressAPL902R, uintyBiAtch, uintSbmVRIk, {from: accounts[4]});
		const addressy4v5PRR = "0x0000000000000000000000000000000000000001"
		const addressPXEDVlu = accounts[0]
		const uintOZAxN7Z = BigInt("1704")
		const addressv93BvtK = accounts[0]
		const uint256yXjXS2C = await Liquidity_v8w8dGuUN.calculate.call(addressy4v5PRR, {from: accounts[4]});
		const boolX5KduNc = await Liquidity_v8w8dGuUN.withdraw.call({from: accounts[1]});
		await Liquidity_v8w8dGuUN.onlyOwner.call({from: accounts[2]});
		const 
RAr9r7N = await Liquidity_v8w8dGuUN._hasAllowance.call(addressv93BvtK, uintOZAxN7Z, addressPXEDVlu, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressnI2Bhxo = accounts[0]
		const addressQXBJMko = accounts[2]
		const uintHlXVmo8 = BigInt("1117")
		const uintfH22pKB = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressnI2Bhxo, addressQXBJMko, uintHlXVmo8, uintfH22pKB, {from: accounts[4]});
		const uintM2oZWKa = BigInt("956")
		const addressRYgBvN = accounts[2]
		const uintN1vXrRS = BigInt("1472")
		const addressFTwnGB7 = "0x0000000000000000000000000000000000000001"
		const uint256w05deBm = await Liquidity_v8w8dGuUN.changeLockDuration.call(uintM2oZWKa, {from: accounts[4]});
		await Liquidity_v8w8dGuUN.onlyOwner.call({from: accounts[2]});
		const 
m3MVK3f = await Liquidity_v8w8dGuUN._hasAllowance.call(addressFTwnGB7, uintN1vXrRS, addressRYgBvN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressHUUaAIL = accounts[0]
		const addresssEqCZJ = accounts[2]
		const uintjIKvPS = BigInt("1117")
		const uintkg99HU = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressHUUaAIL, addresssEqCZJ, uintjIKvPS, uintkg99HU, {from: accounts[4]});
		const uintyXnVmML = BigInt("356")
		const addressXdMbYCC = accounts[4]
		const uintoamLBYo = BigInt("1259")
		const uint64EH7jT5V = await Liquidity_v8w8dGuUN.setRate.call(uintyXnVmML, {from: accounts[4]});
		const 
aDcSU2f = await Liquidity_v8w8dGuUN.userDeposits.call(addressXdMbYCC, {from: accounts[4]});
		const boolukAaYZe = await Liquidity_v8w8dGuUN.stake.call(uintoamLBYo, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressUi8qhe = accounts[0]
		const addressycEiQPb = accounts[2]
		const uintNoe808j = BigInt("1117")
		const uintzvGpqlM = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressUi8qhe, addressycEiQPb, uintNoe808j, uintzvGpqlM, {from: accounts[4]});
		const addressHPaDj38 = accounts[3]
		const addressnCadYRV = accounts[0]
		const 
aDcSU2f = await Liquidity_v8w8dGuUN.userDeposits.call(addressHPaDj38, {from: accounts[4]});
		const addressYURY771 = await Liquidity_v8w8dGuUN.transferOwnership.call(addressnCadYRV, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgwSCqUu = "b3djp2E21uRQV3jkposQpunPLUglXdIKHuon0thYaF8Q2remF786hkIqU5j9p6IvZ7qIWgzuP769W99qhNlohnFyvqJPyKRyb"
		const addressIN5RwwU = accounts[0]
		const addressUwehak4 = accounts[2]
		const uinta6gxkkJ = BigInt("1117")
		const uintC8vMtHm = BigInt("1381")
		const Liquidity_v8w8dGuUN = await Liquidity_v8.new(stringgwSCqUu, addressIN5RwwU, addressUwehak4, uinta6gxkkJ, uintC8vMtHm, {from: accounts[4]});
		await Liquidity_v8w8dGuUN.renounceOwnership.call({from: accounts[4]});
		await Liquidity_v8w8dGuUN.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringmNEyVc = "UsnVOfAUWtv4S3mzbKzGOSXf6wAciN7xfz985dlTqHN"
		const addressnyEgDmd = accounts[3]
		const addressabOSZVx = accounts[5]
		const uintLdIJuhx = BigInt("1903")
		const uintY3YaQkC = BigInt("1348")
		const Liquidity_v8R9adE5 = await Liquidity_v8.new(stringmNEyVc, addressnyEgDmd, addressabOSZVx, uintLdIJuhx, uintY3YaQkC, {from: "0x0000000000000000000000000000000000000001"});
		const uintTpmhhrb = BigInt("352")
		const uint256WvXM2wj = await Liquidity_v8R9adE5.changeLockDuration.call(uintTpmhhrb, {from: accounts[3]});
		const boolZSUosNW = await Liquidity_v8R9adE5.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8R9adE5.onlyOwner.call({from: accounts[1]});
		const addressN3WHEn6 = await Liquidity_v8R9adE5.owner.call({from: accounts[4]});
	});
})