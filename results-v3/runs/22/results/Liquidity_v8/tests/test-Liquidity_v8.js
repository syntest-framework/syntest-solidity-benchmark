const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringNHrre7J = "cyb3tvGj4iqLNi7s6z9tmUCZfANYAJKVk6IWWGmkvp8y5pd"
		const addresschfw0dP = accounts[4]
		const addressG55Iu8u = accounts[4]
		const uintN1Fj9Kh = BigInt("1179")
		const uintNIeqBDd = BigInt("289")
		const Liquidity_v8z6Zqmh9 = await Liquidity_v8.new(stringNHrre7J, addresschfw0dP, addressG55Iu8u, uintN1Fj9Kh, uintNIeqBDd, {from: accounts[5]});
		const addressuBvvYre = accounts[0]
		const uintcVx6gp4 = BigInt("93")
		const address5aiwb9 = accounts[2]
		const 
APw2m5v = await Liquidity_v8z6Zqmh9.userDeposits.call(addressuBvvYre, {from: accounts[4]});
		const uint256uio4HQ = await Liquidity_v8z6Zqmh9.changeLockDuration.call(uintcVx6gp4, {from: accounts[4]});
		const 
Oh8476T = await Liquidity_v8z6Zqmh9.userDeposits.call(address5aiwb9, {from: accounts[3]});
		const addressJrSCBkZ = await Liquidity_v8z6Zqmh9.owner.call({from: accounts[0]});
		const boolCanTg63 = await Liquidity_v8z6Zqmh9.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringZP7Bseu = "ymbhrfvtQk9VhC0Ll5e2uuO9b91kJPfj791sAmxnl2ncEWSM3A2wEWm4LnXO7CnVnpYI5uXdb3z1B1y5em3kIuyR8HPjalBPuw"
		const addressFFSXUdd = accounts[2]
		const addresssdLZgUI = accounts[4]
		const uintj7Ctexv = BigInt("1797")
		const uintI4ma5SV = BigInt("1791")
		const Liquidity_v8fCKV9Qo = await Liquidity_v8.new(stringZP7Bseu, addressFFSXUdd, addresssdLZgUI, uintj7Ctexv, uintI4ma5SV, {from: accounts[5]});
		const addressDlrASfk = accounts[4]
		const bools3tbB36 = await Liquidity_v8fCKV9Qo.withdraw.call({from: accounts[2]});
		const uint256zEYlWIB = await Liquidity_v8fCKV9Qo.calculate.call(addressDlrASfk, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringG5Kcmo = "5zDYCdH2eLJ2veikVTfKokDMqAeqnF6wlJ53YOWNf48MEoB"
		const addressk4k0kgm = accounts[5]
		const addressp2vYcS = accounts[4]
		const uintTRW4Nb = BigInt("205")
		const uintDAOTgZP = BigInt("112")
		const Liquidity_v8moj3MCU = await Liquidity_v8.new(stringG5Kcmo, addressk4k0kgm, addressp2vYcS, uintTRW4Nb, uintDAOTgZP, {from: accounts[2]});
		const addressqGFEoVJ = accounts[3]
		const addressLJUnQ8j = accounts[2]
		const uinteq41mDk = BigInt("401")
		const 
TMVpZud = await Liquidity_v8moj3MCU.userDeposits.call(addressqGFEoVJ, {from: accounts[4]});
		const 
aY0q2Ol = await Liquidity_v8moj3MCU.userDeposits.call(addressLJUnQ8j, {from: "0x0000000000000000000000000000000000000001"});
		const boolDehKQeP = await Liquidity_v8moj3MCU.stake.call(uinteq41mDk, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqC9Y0rc = "fomcyvkxXt7ykcLm"
		const addressD6Xp327 = accounts[5]
		const addressnmvUsmk = accounts[2]
		const uintmlRMzIc = BigInt("1754")
		const uintuxATjOL = BigInt("721")
		const Liquidity_v8V8FWssk = await Liquidity_v8.new(stringqC9Y0rc, addressD6Xp327, addressnmvUsmk, uintmlRMzIc, uintuxATjOL, {from: "0x0000000000000000000000000000000000000001"});
		const uintuymlz2b = BigInt("883")
		const uintXoOfIbn = BigInt("1936")
		const uintLiAws7K = BigInt("656")
		const boolQsGYycJ = await Liquidity_v8V8FWssk.stake.call(uintuymlz2b, {from: accounts[4]});
		const boolN7HOH4G = await Liquidity_v8V8FWssk.emergencyWithdraw.call({from: accounts[4]});
		const boolPO2iSF = await Liquidity_v8V8FWssk.addReward.call(uintXoOfIbn, {from: accounts[4]});
		const booluVcF4uV = await Liquidity_v8V8FWssk.stake.call(uintLiAws7K, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringZP7Bseu = "ymbhrfvtQk9VhC0Ll5e2uuO9b91kJPfj791sAmxnl2ncEWSM3A2wEWm4LnXO7CnVnpYI5uXdb3z1B1y5em3kIuyR8HPjalBPuw"
		const addressxUo3a6r = accounts[2]
		const addresstDnNVKn = accounts[4]
		const uintl5jnArr = BigInt("1797")
		const uintrjAzaw = BigInt("1791")
		const Liquidity_v8fCKV9Qo = await Liquidity_v8.new(stringZP7Bseu, addressxUo3a6r, addresstDnNVKn, uintl5jnArr, uintrjAzaw, {from: accounts[5]});
		const addressFT5P4yL = accounts[5]
		const uint256zEYlWIB = await Liquidity_v8fCKV9Qo.calculate.call(addressFT5P4yL, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringZP7Bseu = "ymbhrfvtQk9VhC0Ll5e2uuO9b91kJPfj791sAmxnl2ncEWSM3A2wEWm4LnXO7CnVnpYI5uXdb3z1B1y5em3kIuyR8HPjalBPuw"
		const addressiILFEIl = accounts[2]
		const addressmruMDGp = accounts[4]
		const uintUaw0LAb = BigInt("1797")
		const uintdBYn6Pq = BigInt("1791")
		const Liquidity_v8fCKV9Qo = await Liquidity_v8.new(stringZP7Bseu, addressiILFEIl, addressmruMDGp, uintUaw0LAb, uintdBYn6Pq, {from: accounts[5]});
		const addressvezJVNx = accounts[4]
		await Liquidity_v8fCKV9Qo.onlyOwner.call({from: accounts[2]});
		const bools3tbB36 = await Liquidity_v8fCKV9Qo.withdraw.call({from: accounts[2]});
		const uint256zEYlWIB = await Liquidity_v8fCKV9Qo.calculate.call(addressvezJVNx, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdzYUAC = "EHWM94AKJY8kxybqs70pWykUPJlWvnmwk5b7NjGuv"
		const addressrubwixO = accounts[1]
		const addressxmiScFk = accounts[0]
		const uintsiRC2y = BigInt("653")
		const uintEZcgK1e = BigInt("1187")
		const Liquidity_v8BWqQovi = await Liquidity_v8.new(stringdzYUAC, addressrubwixO, addressxmiScFk, uintsiRC2y, uintEZcgK1e, {from: accounts[4]});
		const uintPyEuRSN = BigInt("727")
		const uintOc3nGLB = BigInt("1165")
		const addressRGquiRM = await Liquidity_v8BWqQovi.owner.call({from: accounts[1]});
		const uint64IqEYRc = await Liquidity_v8BWqQovi.setRate.call(uintPyEuRSN, {from: "0x0000000000000000000000000000000000000001"});
		const boolqc5yWz = await Liquidity_v8BWqQovi.addReward.call(uintOc3nGLB, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringnGAmQ6J = "8jR1AANx1qNxYR"
		const addressZIkguJZ = accounts[0]
		const addressFjUEfr = accounts[1]
		const uintHfATjD7 = BigInt("1438")
		const uintStcry4F = BigInt("638")
		const Liquidity_v8D8HjQIK = await Liquidity_v8.new(stringnGAmQ6J, addressZIkguJZ, addressFjUEfr, uintHfATjD7, uintStcry4F, {from: accounts[0]});
		const address6LCANK = accounts[3]
		const uintStAsKQJ = BigInt("1020")
		const addresshOA8g7i = accounts[0]
		const addresskVcHkz4 = await Liquidity_v8D8HjQIK.transferOwnership.call(address6LCANK, {from: accounts[0]});
		const uint256tMugpG3 = await Liquidity_v8D8HjQIK.changeLockDuration.call(uintStAsKQJ, {from: accounts[3]});
		await Liquidity_v8D8HjQIK.onlyOwner.call({from: accounts[3]});
		const addresseCBomS9 = await Liquidity_v8D8HjQIK.transferOwnership.call(addresshOA8g7i, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringG5Kcmo = "5zDYCdH2eLJ2veikVTfKokDMqAeqnF6wlJ53YOWNf48MEoB"
		const addressLgIdK9a = accounts[5]
		const addressIaZZwRy = accounts[4]
		const uintdUDxF1v = BigInt("205")
		const uintQbHQmXj = BigInt("112")
		const Liquidity_v8moj3MCU = await Liquidity_v8.new(stringG5Kcmo, addressLgIdK9a, addressIaZZwRy, uintdUDxF1v, uintQbHQmXj, {from: accounts[2]});
		const addresshlK3jsA = accounts[4]
		const 
TMVpZud = await Liquidity_v8moj3MCU.userDeposits.call(addresshlK3jsA, {from: accounts[4]});
		const boolvrl7fkq = await Liquidity_v8moj3MCU.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringG5Kcmo = "5zDYCdH2eLJ2veikVTfKokDMqAeqnF6wlJ53YOWNf48MEoB"
		const addresspGykAbe = accounts[5]
		const addressgUAD2j2 = accounts[4]
		const uinthIxfoX = BigInt("205")
		const uintbvv7QeO = BigInt("112")
		const Liquidity_v8moj3MCU = await Liquidity_v8.new(stringG5Kcmo, addresspGykAbe, addressgUAD2j2, uinthIxfoX, uintbvv7QeO, {from: accounts[2]});
		const uintxrJLEQN = BigInt("503")
		const addressOoJk9fH = accounts[3]
		await Liquidity_v8moj3MCU.renounceOwnership.call({from: accounts[2]});
		const uint64n686P7M = await Liquidity_v8moj3MCU.setRate.call(uintxrJLEQN, {from: accounts[2]});
		const 
TMVpZud = await Liquidity_v8moj3MCU.userDeposits.call(addressOoJk9fH, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringG5Kcmo = "5zDYCdH2eLJ2veikVTfKokDMqAeqnF6wlJ53YOWNf48MEoB"
		const addressN9aFgkR = accounts[5]
		const addressT0s5Mb1 = accounts[4]
		const uintAHGfyqE = BigInt("205")
		const uintpG0TCLR = BigInt("112")
		const Liquidity_v8moj3MCU = await Liquidity_v8.new(stringG5Kcmo, addressN9aFgkR, addressT0s5Mb1, uintAHGfyqE, uintpG0TCLR, {from: accounts[2]});
		const uinteriTdt6 = BigInt("1046")
		const addresscOlDehT = accounts[4]
		const uint256t88Nk1o = await Liquidity_v8moj3MCU.changeLockDuration.call(uinteriTdt6, {from: accounts[2]});
		const 
TMVpZud = await Liquidity_v8moj3MCU.userDeposits.call(addresscOlDehT, {from: accounts[4]});
	});
})