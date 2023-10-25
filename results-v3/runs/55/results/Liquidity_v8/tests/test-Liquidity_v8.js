const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringlLBk0RH = "TYo2ZYfNadcvvETMBa625xTMaNyGSJTvK9bIzKFBH72V77wxNVgIWXk"
		const addressMt2ucCP = accounts[1]
		const addressKtIeXAl = accounts[1]
		const uintUqH0Auk = BigInt("703")
		const uintXO2zHrO = BigInt("250")
		const Liquidity_v8wQBoRCy = await Liquidity_v8.new(stringlLBk0RH, addressMt2ucCP, addressKtIeXAl, uintUqH0Auk, uintXO2zHrO, {from: accounts[2]});
		const addressOgPeU7r = accounts[1]
		const addressK6at130 = accounts[3]
		const uintW4gobCE = BigInt("514")
		const 
dli93SA = await Liquidity_v8wQBoRCy.userDeposits.call(addressOgPeU7r, {from: accounts[4]});
		const boolcVXMdeu = await Liquidity_v8wQBoRCy.isOwner.call({from: accounts[3]});
		const addresst6eu7NV = await Liquidity_v8wQBoRCy.transferOwnership.call(addressK6at130, {from: accounts[4]});
		const uint64MjIrw6V = await Liquidity_v8wQBoRCy.setRate.call(uintW4gobCE, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVkj9GK = "FznNmB129YjjAuvvzhumv6GkoiYVirVK8XdTTjwrhr7iQ3vYFlxiTiwyP5fxbtpKf"
		const addressuNvMASK = accounts[2]
		const addressSDKcSFb = accounts[3]
		const uintRLOEG8 = BigInt("1398")
		const uintY0oHaU = BigInt("801")
		const Liquidity_v8VwMXbud = await Liquidity_v8.new(stringVkj9GK, addressuNvMASK, addressSDKcSFb, uintRLOEG8, uintY0oHaU, {from: accounts[3]});
		const addressDGukac2 = accounts[3]
		const addressiIZRwM1 = accounts[1]
		const uintdaywIhg = BigInt("1783")
		const addressJdvLzH = "0x0000000000000000000000000000000000000001"
		const uintOD1fciB = BigInt("52")
		const uintx4MbQOx = BigInt("66")
		const uint256lLRqYJ = await Liquidity_v8VwMXbud.calculate.call(addressDGukac2, {from: accounts[2]});
		const 
B5ZtYsH = await Liquidity_v8VwMXbud._hasAllowance.call(addressJdvLzH, uintdaywIhg, addressiIZRwM1, {from: accounts[5]});
		await Liquidity_v8VwMXbud.onlyOwner.call({from: accounts[4]});
		const boolvMkSkKk = await Liquidity_v8VwMXbud.stake.call(uintOD1fciB, {from: accounts[1]});
		const uint256AEKVoxl = await Liquidity_v8VwMXbud.changeLockDuration.call(uintx4MbQOx, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQHZWrKV = "uUil74KrSoBocrhcMtRSVr2GJopQUsIHYLSrFTUJoJK5v1AD4XRtR1EAPTmq2kwFUGway2E5HOnjA4sWo7pe"
		const addresshlvtIbK = accounts[4]
		const addresstCSb1df = accounts[2]
		const uintl0xRTMZ = BigInt("1430")
		const uinti47EBDD = BigInt("1070")
		const Liquidity_v8VVOrbbQ = await Liquidity_v8.new(stringQHZWrKV, addresshlvtIbK, addresstCSb1df, uintl0xRTMZ, uinti47EBDD, {from: accounts[3]});
		const uintIEFPpGO = BigInt("1720")
		const addressu3vJJbW = accounts[2]
		const boolYIQiQVh = await Liquidity_v8VVOrbbQ.addReward.call(uintIEFPpGO, {from: accounts[4]});
		const boolJd8oGJc = await Liquidity_v8VVOrbbQ.withdraw.call({from: accounts[4]});
		const 
g0EDDuD = await Liquidity_v8VVOrbbQ.userDeposits.call(addressu3vJJbW, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringkKz6vuo = "sY8v0lRZO16NhiCcJqA0GIhYhRNshHdKRP7u29CdxyOs6wtl6V7vIj6LAuHk5V41OxNrLIjGgInOrA"
		const addressAdx3DCj = accounts[3]
		const addressiQi1B9O = accounts[4]
		const uintnaXOrtf = BigInt("1998")
		const uintXRdM9zq = BigInt("897")
		const Liquidity_v8rNi2ldD = await Liquidity_v8.new(stringkKz6vuo, addressAdx3DCj, addressiQi1B9O, uintnaXOrtf, uintXRdM9zq, {from: accounts[1]});
		const addressOeBXo65 = "0x0000000000000000000000000000000000000001"
		const boolvPFu0Ls = await Liquidity_v8rNi2ldD.isOwner.call({from: accounts[3]});
		const addressCOcJhVR = await Liquidity_v8rNi2ldD.owner.call({from: accounts[4]});
		const boolpY5o4iW = await Liquidity_v8rNi2ldD.isOwner.call({from: accounts[1]});
		const addressxXGqseR = await Liquidity_v8rNi2ldD.transferOwnership.call(addressOeBXo65, {from: accounts[2]});
		const boolkUWnqC7 = await Liquidity_v8rNi2ldD.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJTIqkLT = "wNh1x8xaFpSVMIodzPKm5CgnslSR1W3yk"
		const addressonwpRM3 = "0x0000000000000000000000000000000000000001"
		const addressnuLhhpW = accounts[3]
		const uintGTaW5ka = BigInt("1850")
		const uintoH97LdD = BigInt("1941")
		const Liquidity_v8tuJiKr = await Liquidity_v8.new(stringJTIqkLT, addressonwpRM3, addressnuLhhpW, uintGTaW5ka, uintoH97LdD, {from: "0x0000000000000000000000000000000000000001"});
		const addressHadQncj = accounts[0]
		const uintsTiGduu = BigInt("142")
		const addressBXeaDap = await Liquidity_v8tuJiKr.transferOwnership.call(addressHadQncj, {from: accounts[0]});
		const addressFZCA8M7 = await Liquidity_v8tuJiKr.owner.call({from: accounts[3]});
		await Liquidity_v8tuJiKr.renounceOwnership.call({from: accounts[4]});
		const boolBDb1lvR = await Liquidity_v8tuJiKr.isOwner.call({from: accounts[4]});
		const uint256eEHEb19 = await Liquidity_v8tuJiKr.changeLockDuration.call(uintsTiGduu, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVkj9GK = "FznNmB129YjjAuvvzhumv6GkoiYVirVK8XdTTjwrhr7iQ3vYFlxiTiwyP5fxbtpKf"
		const addressByTaxEk = accounts[2]
		const addressOWK6Poz = accounts[3]
		const uintuPOFPZx = BigInt("1398")
		const uintwTAaa6i = BigInt("801")
		const Liquidity_v8VwMXbud = await Liquidity_v8.new(stringVkj9GK, addressByTaxEk, addressOWK6Poz, uintuPOFPZx, uintwTAaa6i, {from: accounts[3]});
		const addressMuGYcL = accounts[3]
		const addressD9QFut3 = accounts[3]
		const addressGcCITJp = accounts[3]
		const addresskWo76h4 = accounts[1]
		const uintqInMO5Q = BigInt("1783")
		const addresswZUo1o = "0x0000000000000000000000000000000000000001"
		const uintHmHNVVc = BigInt("60")
		const addressR34KUpz = accounts[4]
		const uintSRtsMeG = BigInt("66")
		const uinti7aqKns = BigInt("281")
		const uint256lLRqYJ = await Liquidity_v8VwMXbud.calculate.call(addressMuGYcL, {from: accounts[2]});
		const boolAZROqVm = await Liquidity_v8VwMXbud.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const 
oJGVoQ3 = await Liquidity_v8VwMXbud.userDeposits.call(addressD9QFut3, {from: accounts[4]});
		const 
SSg1S2 = await Liquidity_v8VwMXbud.userDeposits.call(addressGcCITJp, {from: accounts[3]});
		const 
B5ZtYsH = await Liquidity_v8VwMXbud._hasAllowance.call(addresswZUo1o, uintqInMO5Q, addresskWo76h4, {from: accounts[5]});
		const boolvMkSkKk = await Liquidity_v8VwMXbud.stake.call(uintHmHNVVc, {from: accounts[1]});
		const addressFafGsYU = await Liquidity_v8VwMXbud.transferOwnership.call(addressR34KUpz, {from: accounts[2]});
		const uint256AEKVoxl = await Liquidity_v8VwMXbud.changeLockDuration.call(uintSRtsMeG, {from: accounts[4]});
		const uint64OrsA6MU = await Liquidity_v8VwMXbud.setRate.call(uinti7aqKns, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVkj9GK = "FznNmB129YjjAuvvzhumv6GkoiYVirVK8XdTTjwrhr7iQ3vYFlxiTiwyP5fxbtpKf"
		const address1AwSDH = accounts[2]
		const addressMsNwrH7 = accounts[3]
		const uintapEDGGJ = BigInt("1398")
		const uintQsLMv4q = BigInt("801")
		const Liquidity_v8VwMXbud = await Liquidity_v8.new(stringVkj9GK, address1AwSDH, addressMsNwrH7, uintapEDGGJ, uintQsLMv4q, {from: accounts[3]});
		const addressSBACpye = accounts[3]
		const uintiyjqhxE = BigInt("878")
		const addressU4Bza0 = accounts[3]
		const addressKosPeRa = accounts[3]
		const addressUxlZpK = accounts[1]
		const uint0zvCn4 = BigInt("1783")
		const addressw0ZQJyH = "0x0000000000000000000000000000000000000001"
		const uintFF5RncR = BigInt("60")
		const addresssI1p8IK = accounts[5]
		const uintcdtnrE6 = BigInt("66")
		const addressxuyzzS9 = accounts[2]
		const uintc5UGR9 = BigInt("281")
		const uint256lLRqYJ = await Liquidity_v8VwMXbud.calculate.call(addressSBACpye, {from: accounts[2]});
		const uint256j0TiVSp = await Liquidity_v8VwMXbud.changeLockDuration.call(uintiyjqhxE, {from: accounts[3]});
		const 
oJGVoQ3 = await Liquidity_v8VwMXbud.userDeposits.call(addressU4Bza0, {from: accounts[4]});
		const 
SSg1S2 = await Liquidity_v8VwMXbud.userDeposits.call(addressKosPeRa, {from: accounts[3]});
		const boolbLzHv2P = await Liquidity_v8VwMXbud.withdraw.call({from: accounts[2]});
		const 
B5ZtYsH = await Liquidity_v8VwMXbud._hasAllowance.call(addressw0ZQJyH, uint0zvCn4, addressUxlZpK, {from: accounts[5]});
		const boolvMkSkKk = await Liquidity_v8VwMXbud.stake.call(uintFF5RncR, {from: accounts[1]});
		const addressFafGsYU = await Liquidity_v8VwMXbud.transferOwnership.call(addresssI1p8IK, {from: accounts[2]});
		const uint256AEKVoxl = await Liquidity_v8VwMXbud.changeLockDuration.call(uintcdtnrE6, {from: accounts[4]});
		const boolZgMuiS7 = await Liquidity_v8VwMXbud.emergencyWithdraw.call({from: accounts[4]});
		const uint256atRLKIf = await Liquidity_v8VwMXbud.calculate.call(addressxuyzzS9, {from: accounts[4]});
		const uint64OrsA6MU = await Liquidity_v8VwMXbud.setRate.call(uintc5UGR9, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVkj9GK = "FznNmB129YjjAuvvzhumv6GkoiYVirVK8XdTTjwrhr7iQ3vYFlxiTiwyP5fxbtpKf"
		const addressqP44x2c = accounts[2]
		const addressJcYgDtO = accounts[3]
		const uintxag5nVA = BigInt("1398")
		const uintDopJ7G4 = BigInt("801")
		const Liquidity_v8VwMXbud = await Liquidity_v8.new(stringVkj9GK, addressqP44x2c, addressJcYgDtO, uintxag5nVA, uintDopJ7G4, {from: accounts[3]});
		const addressbsbHWMS = accounts[4]
		const addressiOq7mDv = accounts[0]
		const addressC3gvo7c = accounts[1]
		const uintttVWLxe = BigInt("1783")
		const addressiZDFZev = accounts[2]
		const uint256lLRqYJ = await Liquidity_v8VwMXbud.calculate.call(addressbsbHWMS, {from: accounts[2]});
		const addresspiB7fhU = await Liquidity_v8VwMXbud.transferOwnership.call(addressiOq7mDv, {from: accounts[3]});
		const 
B5ZtYsH = await Liquidity_v8VwMXbud._hasAllowance.call(addressiZDFZev, uintttVWLxe, addressC3gvo7c, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVkj9GK = "FznNmB129YjjAuvvzhumv6GkoiYVirVK8XdTTjwrhr7iQ3vYFlxiTiwyP5fxbtpKf"
		const addressuhvLcW = accounts[2]
		const addressmdfT4u9 = accounts[3]
		const uintdGETXS8 = BigInt("1398")
		const uintDKWiSka = BigInt("801")
		const Liquidity_v8VwMXbud = await Liquidity_v8.new(stringVkj9GK, addressuhvLcW, addressmdfT4u9, uintdGETXS8, uintDKWiSka, {from: accounts[3]});
		const addressM8vPZ4b = accounts[3]
		const addressWvIVcjq = accounts[4]
		const addressDGSWVb1 = accounts[1]
		const uintIyK9UlD = BigInt("1783")
		const addressGOgqbAC = accounts[2]
		const uintNXXw6Q1 = BigInt("60")
		const addresskORbevQ = accounts[1]
		const uintFgIKW6 = BigInt("66")
		const uintNSTuZv = BigInt("281")
		const uint256lLRqYJ = await Liquidity_v8VwMXbud.calculate.call(addressM8vPZ4b, {from: accounts[2]});
		const 
oJGVoQ3 = await Liquidity_v8VwMXbud.userDeposits.call(addressWvIVcjq, {from: accounts[4]});
		await Liquidity_v8VwMXbud.renounceOwnership.call({from: accounts[3]});
		const 
B5ZtYsH = await Liquidity_v8VwMXbud._hasAllowance.call(addressGOgqbAC, uintIyK9UlD, addressDGSWVb1, {from: accounts[5]});
		const boolDIJEbh = await Liquidity_v8VwMXbud.withdraw.call({from: accounts[2]});
		const boolvMkSkKk = await Liquidity_v8VwMXbud.stake.call(uintNXXw6Q1, {from: accounts[1]});
		await Liquidity_v8VwMXbud.onlyOwner.call({from: accounts[0]});
		const uint256Q3Susky = await Liquidity_v8VwMXbud.calculate.call(addresskORbevQ, {from: accounts[4]});
		const uint256AEKVoxl = await Liquidity_v8VwMXbud.changeLockDuration.call(uintFgIKW6, {from: accounts[4]});
		const boolZgMuiS7 = await Liquidity_v8VwMXbud.emergencyWithdraw.call({from: accounts[4]});
		const uint64OrsA6MU = await Liquidity_v8VwMXbud.setRate.call(uintNSTuZv, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringLvlqWSc = "HHfE1QidIItm0iiBFbY"
		const addressBVm1CdC = accounts[3]
		const addressXFcgiX0 = accounts[3]
		const uintsoC2JYQ = BigInt("215")
		const uinttzoj5k = BigInt("1376")
		const Liquidity_v8D4oX83g = await Liquidity_v8.new(stringLvlqWSc, addressBVm1CdC, addressXFcgiX0, uintsoC2JYQ, uinttzoj5k, {from: accounts[4]});
		const uintmFNi8Rv = BigInt("1247")
		const addresse4z8CI = accounts[1]
		const uint64zEpMDcV = await Liquidity_v8D4oX83g.setRate.call(uintmFNi8Rv, {from: accounts[4]});
		const boolUT3lqiA = await Liquidity_v8D4oX83g.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8D4oX83g.renounceOwnership.call({from: accounts[2]});
		const addresseJrCS6i = await Liquidity_v8D4oX83g.transferOwnership.call(addresse4z8CI, {from: accounts[0]});
	});
})