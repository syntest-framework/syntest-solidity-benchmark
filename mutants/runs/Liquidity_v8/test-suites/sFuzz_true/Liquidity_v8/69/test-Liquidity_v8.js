const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringBIsECxW = "eYoKcO5q7kRbG1dqdVzasbz50wUKRxWBAOVfg44W7Q8NfDVhSpDOc4AOl80eFjvyrZLtvyo"
		const addressDLYDsRt = accounts[0]
		const addresssMgqOQQ = accounts[2]
		const uint0zsuls = BigInt("270")
		const uintGiFnWkQ = BigInt("1730")
		const Liquidity_v8xxx3iC3 = await Liquidity_v8.new(stringBIsECxW, addressDLYDsRt, addresssMgqOQQ, uint0zsuls, uintGiFnWkQ, {from: accounts[4]});
		const uintMRP5y5y = BigInt("856")
		const addressL51ZYQm = accounts[1]
		const booleuaAcjx = await Liquidity_v8xxx3iC3.stake.call(uintMRP5y5y, {from: accounts[2]});
		const 
lye1nDZ = await Liquidity_v8xxx3iC3.userDeposits.call(addressL51ZYQm, {from: accounts[0]});
		await Liquidity_v8xxx3iC3.onlyOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringESa0WeL = "QGKtyLfbexdvN4pmqcXpMYrvLGHk8pBbXhqdsiFyOSrqu89xfyv59adFO"
		const addressMNOf1xh = accounts[4]
		const addresswfqdIrZ = accounts[3]
		const uintNbF2SMI = BigInt("1317")
		const uintgIdjdDP = BigInt("1021")
		const Liquidity_v8QUxtdhm = await Liquidity_v8.new(stringESa0WeL, addressMNOf1xh, addresswfqdIrZ, uintNbF2SMI, uintgIdjdDP, {from: accounts[4]});
		const addressjfp5Jf = accounts[4]
		const addressFEE3ZQV = await Liquidity_v8QUxtdhm.transferOwnership.call(addressjfp5Jf, {from: accounts[0]});
		await Liquidity_v8QUxtdhm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolvlURw41 = await Liquidity_v8QUxtdhm.emergencyWithdraw.call({from: accounts[0]});
		await Liquidity_v8QUxtdhm.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringux7eUqR = "Hj8PtcIcWt3Po4uCiyRMeJiXOZySDZWq1EhEQ7qFi5I4s3l4jS62tvq03xnp8cks8hqjnsviLNbGM2A1"
		const addressNT4UZpf = accounts[0]
		const addressO1Sp7c6 = accounts[5]
		const uintFQtZjzj = BigInt("96")
		const uintkPvCxI = BigInt("804")
		const Liquidity_v8x3hIQI = await Liquidity_v8.new(stringux7eUqR, addressNT4UZpf, addressO1Sp7c6, uintFQtZjzj, uintkPvCxI, {from: "0x0000000000000000000000000000000000000001"});
		const addressH0mj5hs = accounts[4]
		const uintEzX4cdQ = BigInt("677")
		const uintAdsGmn = BigInt("1379")
		const address0UU7nB = await Liquidity_v8x3hIQI.transferOwnership.call(addressH0mj5hs, {from: accounts[0]});
		const uint64w5YLU4 = await Liquidity_v8x3hIQI.setRate.call(uintEzX4cdQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint64lJQNcON = await Liquidity_v8x3hIQI.setRate.call(uintAdsGmn, {from: accounts[4]});
		await Liquidity_v8x3hIQI.onlyOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringL2Ejyg = "aLqdI9d1GDzIznA6wTzVg31dYrYZ6Vspi6eQHMyO4s0azPYrS2L6VGdm0AT2Bj1QzROo9"
		const addressv5lyA9q = accounts[1]
		const addresssIwJN15 = accounts[3]
		const uintIrp9wtW = BigInt("636")
		const uintC7OQJEb = BigInt("176")
		const Liquidity_v8KXZenEM = await Liquidity_v8.new(stringL2Ejyg, addressv5lyA9q, addresssIwJN15, uintIrp9wtW, uintC7OQJEb, {from: accounts[4]});
		const addressimFbwuz = accounts[0]
		const uintfgAeDB5 = BigInt("994")
		const uintOARvvaZ = BigInt("1343")
		const addressiukJj2O = await Liquidity_v8KXZenEM.transferOwnership.call(addressimFbwuz, {from: accounts[4]});
		const boolgBvSmKb = await Liquidity_v8KXZenEM.emergencyWithdraw.call({from: accounts[1]});
		const boolyEjFQex = await Liquidity_v8KXZenEM.isOwner.call({from: accounts[5]});
		const booltItXkEX = await Liquidity_v8KXZenEM.addReward.call(uintfgAeDB5, {from: accounts[4]});
		const boolnAoini4 = await Liquidity_v8KXZenEM.addReward.call(uintOARvvaZ, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLl2Xm4X = "bNeQhbzdyxQOrXAQYEJihQ8dmLm3LoUpzvH4WDT3rLC6fOBMAWatwN6zBJFLoplGmOvAxzCsae2SJ8d2F2orkJiN5bUA7"
		const addressHJLRxZo = accounts[3]
		const addressSP4el9K = accounts[4]
		const uintJDcGr2T = BigInt("697")
		const uintoGRHIUh = BigInt("563")
		const Liquidity_v8Ve3MnZd = await Liquidity_v8.new(stringLl2Xm4X, addressHJLRxZo, addressSP4el9K, uintJDcGr2T, uintoGRHIUh, {from: accounts[1]});
		const addressLfkvWhT = accounts[5]
		const uintewh4BiQ = BigInt("1560")
		const addressSToXeIe = accounts[4]
		const uintqs4tnvX = BigInt("30")
		const addressJZbpY7K = accounts[1]
		const boolleEFrmj = await Liquidity_v8Ve3MnZd.withdraw.call({from: accounts[4]});
		const boolqmScaFX = await Liquidity_v8Ve3MnZd.withdraw.call({from: accounts[1]});
		const addressZ6WJow0 = await Liquidity_v8Ve3MnZd.transferOwnership.call(addressLfkvWhT, {from: accounts[2]});
		const uint64kfLveF7 = await Liquidity_v8Ve3MnZd.setRate.call(uintewh4BiQ, {from: accounts[5]});
		const boolFCGN2Yx = await Liquidity_v8Ve3MnZd.withdraw.call({from: accounts[4]});
		const 
gPFSnpQ = await Liquidity_v8Ve3MnZd._hasAllowance.call(addressJZbpY7K, uintqs4tnvX, addressSToXeIe, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyblvNJU = "TG9TVEAgmEgFHFubrtsif4h5voHys2VnNl4lxDuTHlIS"
		const addressGjmVxSP = accounts[1]
		const addresstWshuW = accounts[1]
		const uintuYLyOHN = BigInt("1569")
		const uintLUcRhN = BigInt("1639")
		const Liquidity_v8le9vbCC = await Liquidity_v8.new(stringyblvNJU, addressGjmVxSP, addresstWshuW, uintuYLyOHN, uintLUcRhN, {from: accounts[4]});
		const uintDoY5qGC = BigInt("491")
		await Liquidity_v8le9vbCC.onlyOwner.call({from: accounts[0]});
		await Liquidity_v8le9vbCC.onlyOwner.call({from: accounts[1]});
		const boolKPUcjYe = await Liquidity_v8le9vbCC.stake.call(uintDoY5qGC, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTuul7Bq = "bHBvupsJCs"
		const addressDIfklPJ = accounts[3]
		const addresspSBPqHK = accounts[2]
		const uintx4RbFA8 = BigInt("217")
		const uintZNXXKj3 = BigInt("2022")
		const Liquidity_v8xgrMtP = await Liquidity_v8.new(stringTuul7Bq, addressDIfklPJ, addresspSBPqHK, uintx4RbFA8, uintZNXXKj3, {from: accounts[1]});
		const addressgM559cQ = accounts[3]
		const 
kNBmDDX = await Liquidity_v8xgrMtP.userDeposits.call(addressgM559cQ, {from: accounts[2]});
		const boolPKdmRPK = await Liquidity_v8xgrMtP.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyblvNJU = "TG9TVEAgmEgFHFubrtsif4h5voHys2VnNl4lxDuTHlIS"
		const addressGowOKrZ = accounts[1]
		const addressnpzfDjt = accounts[1]
		const uintWXETN0l = BigInt("1569")
		const uintsmWwVpG = BigInt("1639")
		const Liquidity_v8le9vbCC = await Liquidity_v8.new(stringyblvNJU, addressGowOKrZ, addressnpzfDjt, uintWXETN0l, uintsmWwVpG, {from: accounts[4]});
		const addressq2CJrt0 = accounts[1]
		const uintdDChYGb = BigInt("459")
		const uint256cFZJF5t = await Liquidity_v8le9vbCC.calculate.call(addressq2CJrt0, {from: accounts[4]});
		const boolKPUcjYe = await Liquidity_v8le9vbCC.stake.call(uintdDChYGb, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTuul7Bq = "bHBvupsJCs"
		const addressFJmS3sz = accounts[3]
		const addressv5UByvi = accounts[2]
		const uintZiRX8on = BigInt("217")
		const uintFr6GUhi = BigInt("2022")
		const Liquidity_v8xgrMtP = await Liquidity_v8.new(stringTuul7Bq, addressFJmS3sz, addressv5UByvi, uintZiRX8on, uintFr6GUhi, {from: accounts[1]});
		const addresskGBQsxz = accounts[2]
		const addressWOyBy7l = accounts[2]
		const uint256wq62Esi = await Liquidity_v8xgrMtP.calculate.call(addresskGBQsxz, {from: accounts[0]});
		const 
kNBmDDX = await Liquidity_v8xgrMtP.userDeposits.call(addressWOyBy7l, {from: accounts[2]});
		await Liquidity_v8xgrMtP.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTuul7Bq = "bHBvupsJCs"
		const addressnZHTkjU = accounts[3]
		const addressTN4zFyo = accounts[2]
		const uintjnKwzdt = BigInt("217")
		const uintwsiVPus = BigInt("2022")
		const Liquidity_v8xgrMtP = await Liquidity_v8.new(stringTuul7Bq, addressnZHTkjU, addressTN4zFyo, uintjnKwzdt, uintwsiVPus, {from: accounts[1]});
		const addresslMZLJ9t = accounts[3]
		const addressERlTKWs = await Liquidity_v8xgrMtP.owner.call({from: accounts[1]});
		const 
kNBmDDX = await Liquidity_v8xgrMtP.userDeposits.call(addresslMZLJ9t, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTuul7Bq = "bHBvupsJCs"
		const addressZ8PdMKS = accounts[3]
		const addressVdoP1WQ = accounts[2]
		const uintTKiOFEb = BigInt("217")
		const uinte8MzGw0 = BigInt("2022")
		const Liquidity_v8xgrMtP = await Liquidity_v8.new(stringTuul7Bq, addressZ8PdMKS, addressVdoP1WQ, uintTKiOFEb, uinte8MzGw0, {from: accounts[1]});
		const uintdnWHNoX = BigInt("34")
		const addressXeDIIZ1 = accounts[3]
		const uint64e4PRKhA = await Liquidity_v8xgrMtP.setRate.call(uintdnWHNoX, {from: accounts[1]});
		const 
kNBmDDX = await Liquidity_v8xgrMtP.userDeposits.call(addressXeDIIZ1, {from: accounts[2]});
		await Liquidity_v8xgrMtP.renounceOwnership.call({from: accounts[1]});
		const boolYHRGMBl = await Liquidity_v8xgrMtP.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyblvNJU = "TG9TVEAgmEgFHFubrtsif4h5voHys2VnNl4lxDuTHlIS"
		const addresseaXAXG8 = accounts[1]
		const addressnLbm7v = accounts[1]
		const uintInO1dvZ = BigInt("1569")
		const uinty7iUlFc = BigInt("1639")
		const Liquidity_v8le9vbCC = await Liquidity_v8.new(stringyblvNJU, addresseaXAXG8, addressnLbm7v, uintInO1dvZ, uinty7iUlFc, {from: accounts[4]});
		const uintj9SjH1D = BigInt("559")
		const uintuyTYNOZ = BigInt("445")
		const uint256xMixPmq = await Liquidity_v8le9vbCC.changeLockDuration.call(uintj9SjH1D, {from: accounts[4]});
		const boolKPUcjYe = await Liquidity_v8le9vbCC.stake.call(uintuyTYNOZ, {from: accounts[0]});
	});
})