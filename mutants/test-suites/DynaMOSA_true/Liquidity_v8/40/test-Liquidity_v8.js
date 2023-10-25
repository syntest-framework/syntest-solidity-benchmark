const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringdWJDdy = "lG99J3rlnH6HW1BOOj8V9j3yXL4KnTLOl2RUEwfbGmV"
		const addressB4rOoDD = accounts[4]
		const addressxBQG3KM = accounts[2]
		const uintZs6UxoQ = BigInt("1782")
		const uintufHjn5x = BigInt("637")
		const Liquidity_v8kKru5IP = await Liquidity_v8.new(stringdWJDdy, addressB4rOoDD, addressxBQG3KM, uintZs6UxoQ, uintufHjn5x, {from: accounts[2]});
		const addressVrYhBRt = accounts[3]
		const uintF5lM7K8 = BigInt("1480")
		const addressvtR72nS = await Liquidity_v8kKru5IP.transferOwnership.call(addressVrYhBRt, {from: accounts[2]});
		await Liquidity_v8kKru5IP.renounceOwnership.call({from: accounts[1]});
		const booldcUWeNO = await Liquidity_v8kKru5IP.emergencyWithdraw.call({from: accounts[1]});
		const uint64p1greZe = await Liquidity_v8kKru5IP.setRate.call(uintF5lM7K8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringBO4csV = "cHe37xQnSlhgCaJ4R6l0bQ3I6bagvn4MEOqF3CvpNLkdJ8ntl2Krx"
		const addressd3EuoBC = accounts[1]
		const addressXx9WE5E = accounts[5]
		const uintJeBLwFj = BigInt("1555")
		const uintikjrg5 = BigInt("703")
		const Liquidity_v8elwn4OV = await Liquidity_v8.new(stringBO4csV, addressd3EuoBC, addressXx9WE5E, uintJeBLwFj, uintikjrg5, {from: accounts[1]});
		const addressRF40HWR = accounts[3]
		const uintMyOUjqB = BigInt("1248")
		const addressDJT8DcC = "0x0000000000000000000000000000000000000001"
		const uintcfYcwb = BigInt("430")
		const addressscY70B2 = accounts[4]
		await Liquidity_v8elwn4OV.onlyOwner.call({from: accounts[1]});
		const 
jLVvCE = await Liquidity_v8elwn4OV._hasAllowance.call(addressDJT8DcC, uintMyOUjqB, addressRF40HWR, {from: "0x0000000000000000000000000000000000000001"});
		const uint64CkJJzeI = await Liquidity_v8elwn4OV.setRate.call(uintcfYcwb, {from: accounts[2]});
		const addressSqcX797 = await Liquidity_v8elwn4OV.transferOwnership.call(addressscY70B2, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFus8nh7 = ""
		const addressEWQy96p = accounts[2]
		const addressNEqzNFg = accounts[2]
		const uintXhYdJMe = BigInt("1605")
		const uintvvCaPb = BigInt("575")
		const Liquidity_v8NN3E1RY = await Liquidity_v8.new(stringFus8nh7, addressEWQy96p, addressNEqzNFg, uintXhYdJMe, uintvvCaPb, {from: accounts[3]});
		const addressdvDWw9Q = "0x0000000000000000000000000000000000000001"
		const uint8qrEG9 = BigInt("610")
		const uintCd0Ld0l = BigInt("1529")
		const 
c0CqsSt = await Liquidity_v8NN3E1RY.userDeposits.call(addressdvDWw9Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint642KoubB = await Liquidity_v8NN3E1RY.setRate.call(uint8qrEG9, {from: accounts[2]});
		const booljjxXKrk = await Liquidity_v8NN3E1RY.stake.call(uintCd0Ld0l, {from: accounts[0]});
		await Liquidity_v8NN3E1RY.onlyOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringv8OFwaN = "7zjFA8NciqlDlF8hwpzINY6QUqzGHpCtN8cW2P4RTvSJ3evlfI7EkrNNy4k9apbtEm2WH0t4ygeemGPT6Vi995zp6yfK"
		const addressQGeMkN = accounts[2]
		const addresstFuLAwY = "0x0000000000000000000000000000000000000001"
		const uintqswqp26 = BigInt("1284")
		const uintUZlox0d = BigInt("440")
		const Liquidity_v8dBOTnxB = await Liquidity_v8.new(stringv8OFwaN, addressQGeMkN, addresstFuLAwY, uintqswqp26, uintUZlox0d, {from: accounts[4]});
		const uintUDN6N2q = BigInt("1998")
		const addressDbSPbyx = accounts[2]
		const addressECoO6L2 = accounts[4]
		const uintXggpDQ = BigInt("1292")
		const addressyBVF1hC = accounts[0]
		const uintcECNKHn = BigInt("878")
		const boolLJfWLd = await Liquidity_v8dBOTnxB.addReward.call(uintUDN6N2q, {from: accounts[4]});
		const addressTHXFAsE = await Liquidity_v8dBOTnxB.transferOwnership.call(addressDbSPbyx, {from: accounts[3]});
		const addresssoKssoP = await Liquidity_v8dBOTnxB.transferOwnership.call(addressECoO6L2, {from: accounts[1]});
		const boolJUzID2X = await Liquidity_v8dBOTnxB.stake.call(uintXggpDQ, {from: accounts[4]});
		const 
EM6KtvQ = await Liquidity_v8dBOTnxB.userDeposits.call(addressyBVF1hC, {from: accounts[0]});
		const boolbZO8a9I = await Liquidity_v8dBOTnxB.stake.call(uintcECNKHn, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFus8nh7 = ""
		const addressWXYV0cd = accounts[2]
		const addressQ0smp2r = accounts[2]
		const uintrCuDqzv = BigInt("1605")
		const uintKaCuygJ = BigInt("575")
		const Liquidity_v8NN3E1RY = await Liquidity_v8.new(stringFus8nh7, addressWXYV0cd, addressQ0smp2r, uintrCuDqzv, uintKaCuygJ, {from: accounts[3]});
		const addressaxYTHUb = "0x0000000000000000000000000000000000000001"
		const addressizw8G0D = accounts[4]
		const uinteDHf0HM = BigInt("610")
		const 
c0CqsSt = await Liquidity_v8NN3E1RY.userDeposits.call(addressaxYTHUb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VZcjA7 = await Liquidity_v8NN3E1RY.calculate.call(addressizw8G0D, {from: accounts[3]});
		const uint642KoubB = await Liquidity_v8NN3E1RY.setRate.call(uinteDHf0HM, {from: accounts[2]});
		await Liquidity_v8NN3E1RY.onlyOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVXz9K1G = "IVo54OZ6lPgr2kwy0QPeNM8Ulr6AOLZk1Kgcql72eUEM75PxpXmXv8bjQDg3gkxhHHY"
		const addressFpsLON = "0x0000000000000000000000000000000000000001"
		const addressAwBi1MB = accounts[3]
		const uintOr2mhFH = BigInt("480")
		const uintWl6N3JM = BigInt("1758")
		const Liquidity_v8gzzaDhl = await Liquidity_v8.new(stringVXz9K1G, addressFpsLON, addressAwBi1MB, uintOr2mhFH, uintWl6N3JM, {from: "0x0000000000000000000000000000000000000001"});
		const uintFsMHLVV = BigInt("1373")
		const address0Pm1gr = accounts[5]
		const uintaaR8wFn = BigInt("470")
		const boolf1a1SG4 = await Liquidity_v8gzzaDhl.emergencyWithdraw.call({from: accounts[3]});
		const boolIva4NCG = await Liquidity_v8gzzaDhl.emergencyWithdraw.call({from: accounts[0]});
		const boolZABiaE = await Liquidity_v8gzzaDhl.addReward.call(uintFsMHLVV, {from: accounts[3]});
		const uint256sMj4KQ = await Liquidity_v8gzzaDhl.calculate.call(address0Pm1gr, {from: accounts[4]});
		const boolD0PhUdL = await Liquidity_v8gzzaDhl.stake.call(uintaaR8wFn, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgnonVql = "XGKgAPjcU7RgT9DcMxunkWyJXE5Ef38xcIs3R6avnE6LPCqNPoycdLmrr236V1Cx5kPqTc"
		const addressUZUvaSv = accounts[1]
		const addresshVtRqG8 = accounts[1]
		const uinto8K3oZ = BigInt("1123")
		const uintojggMWj = BigInt("146")
		const Liquidity_v8z2hSykT = await Liquidity_v8.new(stringgnonVql, addressUZUvaSv, addresshVtRqG8, uinto8K3oZ, uintojggMWj, {from: accounts[1]});
		const uintkEtcvTK = BigInt("1273")
		const boolfSRnyuI = await Liquidity_v8z2hSykT.withdraw.call({from: accounts[5]});
		const uint256eOEOaco = await Liquidity_v8z2hSykT.changeLockDuration.call(uintkEtcvTK, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringUxz8at = "CDNMkbVBXi8B96GcAVxqdPHS4N"
		const addressxfkQTNE = accounts[0]
		const addresscmp3V1X = accounts[0]
		const uintDgJSjzE = BigInt("1932")
		const uintkTF8dM0 = BigInt("1248")
		const Liquidity_v8HBEiGi7 = await Liquidity_v8.new(stringUxz8at, addressxfkQTNE, addresscmp3V1X, uintDgJSjzE, uintkTF8dM0, {from: accounts[0]});
		const addressZH6c69d = accounts[5]
		const booliGEjKcr = await Liquidity_v8HBEiGi7.emergencyWithdraw.call({from: accounts[0]});
		await Liquidity_v8HBEiGi7.renounceOwnership.call({from: accounts[0]});
		const uint256CV5rnCt = await Liquidity_v8HBEiGi7.calculate.call(addressZH6c69d, {from: accounts[2]});
		const boolKFnJdQo = await Liquidity_v8HBEiGi7.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlp8BrEQ = "eJxfTndeUGqtjA79BFLAFh5u371LX34qOPaoLIQgth6"
		const addressL5VBieW = "0x0000000000000000000000000000000000000001"
		const addresswTLdkTt = accounts[3]
		const uintMe0sLHN = BigInt("76")
		const uintxBmvErh = BigInt("1112")
		const Liquidity_v8OAPo4c = await Liquidity_v8.new(stringlp8BrEQ, addressL5VBieW, addresswTLdkTt, uintMe0sLHN, uintxBmvErh, {from: accounts[4]});
		const uintM9CVRn8 = BigInt("1928")
		const uintrMc5p2g = BigInt("1344")
		const uint64W2pcPaa = await Liquidity_v8OAPo4c.setRate.call(uintM9CVRn8, {from: accounts[4]});
		const booliwm2EhB = await Liquidity_v8OAPo4c.emergencyWithdraw.call({from: accounts[4]});
		const boolX3xr54r = await Liquidity_v8OAPo4c.withdraw.call({from: accounts[1]});
		await Liquidity_v8OAPo4c.onlyOwner.call({from: accounts[0]});
		const boolwjLOyiH = await Liquidity_v8OAPo4c.stake.call(uintrMc5p2g, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgnonVql = "XGKgAPjcU7RgT9DcMxunkWyJXE5Ef38xcIs3R6avnE6LPCqNPoycdLmrr236V1Cx5kPqTc"
		const addressd2smpGX = accounts[1]
		const addressRqwCR4G = accounts[1]
		const uintbiiXvFk = BigInt("1123")
		const uintf22sqZE = BigInt("146")
		const Liquidity_v8z2hSykT = await Liquidity_v8.new(stringgnonVql, addressd2smpGX, addressRqwCR4G, uintbiiXvFk, uintf22sqZE, {from: accounts[1]});
		const addressF4kG3Cc = accounts[4]
		const addressUaj0hl7 = accounts[0]
		const addressvxtt1SU = accounts[0]
		const uintE8bFrf8 = BigInt("422")
		const addressD76wd8r = accounts[3]
		const uintpno2g4o = BigInt("1273")
		const addressFIhQT91 = await Liquidity_v8z2hSykT.owner.call({from: accounts[0]});
		const boolLxkzFaO = await Liquidity_v8z2hSykT.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const addressAGT8Lus = await Liquidity_v8z2hSykT.transferOwnership.call(addressF4kG3Cc, {from: accounts[3]});
		const addressVuirAac = await Liquidity_v8z2hSykT.transferOwnership.call(addressUaj0hl7, {from: "0x0000000000000000000000000000000000000001"});
		const 
PYdCMGy = await Liquidity_v8z2hSykT._hasAllowance.call(addressD76wd8r, uintE8bFrf8, addressvxtt1SU, {from: accounts[4]});
		const uint256eOEOaco = await Liquidity_v8z2hSykT.changeLockDuration.call(uintpno2g4o, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlOKUd2Y = "5"
		const addressfQIIgtp = accounts[5]
		const addressu8xfdwa = accounts[0]
		const uintbroX0TW = BigInt("123")
		const uintXsOgMBK = BigInt("1570")
		const Liquidity_v8bOLUli3 = await Liquidity_v8.new(stringlOKUd2Y, addressfQIIgtp, addressu8xfdwa, uintbroX0TW, uintXsOgMBK, {from: accounts[3]});
		const uintG4t9qsc = BigInt("1397")
		const addressFczDFnD = accounts[1]
		const uint256myV3rMz = await Liquidity_v8bOLUli3.changeLockDuration.call(uintG4t9qsc, {from: accounts[3]});
		const 
IPjE54X = await Liquidity_v8bOLUli3.userDeposits.call(addressFczDFnD, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlOKUd2Y = "5"
		const addressUR7sRzi = accounts[5]
		const addresspLZz6oB = accounts[0]
		const uintULZhWOr = BigInt("123")
		const uintOA9rB5k = BigInt("1570")
		const Liquidity_v8bOLUli3 = await Liquidity_v8.new(stringlOKUd2Y, addressUR7sRzi, addresspLZz6oB, uintULZhWOr, uintOA9rB5k, {from: accounts[3]});
		const addressX3iOuNr = accounts[1]
		const boolMJxb27U = await Liquidity_v8bOLUli3.isOwner.call({from: accounts[0]});
		await Liquidity_v8bOLUli3.renounceOwnership.call({from: accounts[3]});
		const 
Dr3hqsk = await Liquidity_v8bOLUli3.userDeposits.call(addressX3iOuNr, {from: accounts[5]});
	});
})