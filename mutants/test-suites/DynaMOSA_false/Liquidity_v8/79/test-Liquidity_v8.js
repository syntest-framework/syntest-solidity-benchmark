const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringQLATGYv = "LyeHnvUXo0ziGyRZcBI3mYF7ftqpTVyhbGlwmXn1qawC9g5SkBItKDf71zXw1NBLzwrBhcnR4XAX9BCVx"
		const addressyhfE3LT = accounts[1]
		const addressSa0WT9 = accounts[0]
		const uintC6kXnno = BigInt("58")
		const uintZI9OazS = BigInt("1715")
		const Liquidity_v8ogR5jK4 = await Liquidity_v8.new(stringQLATGYv, addressyhfE3LT, addressSa0WT9, uintC6kXnno, uintZI9OazS, {from: accounts[1]});
		const addressKe5nDn5 = accounts[2]
		const uintPjieeC5 = BigInt("252")
		const addressgfJHofO = await Liquidity_v8ogR5jK4.transferOwnership.call(addressKe5nDn5, {from: accounts[0]});
		const boolGIF7A74 = await Liquidity_v8ogR5jK4.addReward.call(uintPjieeC5, {from: accounts[1]});
		const addressuORBeqv = await Liquidity_v8ogR5jK4.owner.call({from: accounts[3]});
		const boolicLko3D = await Liquidity_v8ogR5jK4.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringuuhnZe = "KYfYZHO"
		const addressZHrGGNW = accounts[2]
		const addresssMoKWQ2 = accounts[2]
		const uintd9wXztE = BigInt("206")
		const uintqUwtGoV = BigInt("940")
		const Liquidity_v8sG2Z699 = await Liquidity_v8.new(stringuuhnZe, addressZHrGGNW, addresssMoKWQ2, uintd9wXztE, uintqUwtGoV, {from: accounts[4]});
		const addressLBJRw7r = accounts[3]
		const boolYZbMSBu = await Liquidity_v8sG2Z699.isOwner.call({from: accounts[4]});
		const uint256dKMPmVq = await Liquidity_v8sG2Z699.calculate.call(addressLBJRw7r, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringn5jEklT = "pAQ8bqEtm3mAYUxTfPetdAu3LkZ14lwraN9O4X5pNa4VtN2RkXTVyPG2oPAj"
		const addressu6LZof = accounts[0]
		const addressTFmN0e3 = accounts[2]
		const uintnC86Tfl = BigInt("270")
		const uintph5We6H = BigInt("1049")
		const Liquidity_v8csBm10G = await Liquidity_v8.new(stringn5jEklT, addressu6LZof, addressTFmN0e3, uintnC86Tfl, uintph5We6H, {from: accounts[4]});
		const uintqY3yBc1 = BigInt("1438")
		const addresslHJTOCB = accounts[1]
		await Liquidity_v8csBm10G.onlyOwner.call({from: accounts[5]});
		const uint256oaMOPIt = await Liquidity_v8csBm10G.changeLockDuration.call(uintqY3yBc1, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8csBm10G.renounceOwnership.call({from: accounts[4]});
		const 
lwb61CK = await Liquidity_v8csBm10G.userDeposits.call(addresslHJTOCB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringkDRhnG6 = "SjbdGrVm8IibM9WHJQMEhmOjaSBm8NOUeFJN7BAWvw4nLpk68Q24RD7bI8JYVgO2ulptirlvgHxdBluH"
		const addressyaHw9hF = accounts[2]
		const addressop7YnRg = "0x0000000000000000000000000000000000000001"
		const uintxsbpQaO = BigInt("116")
		const uintbrF1nUI = BigInt("709")
		const Liquidity_v8HSf0IbX = await Liquidity_v8.new(stringkDRhnG6, addressyaHw9hF, addressop7YnRg, uintxsbpQaO, uintbrF1nUI, {from: accounts[3]});
		const addressHHQ3j2M = accounts[4]
		const addresskZkK3fr = accounts[0]
		const 
Q9KYOu = await Liquidity_v8HSf0IbX.userDeposits.call(addressHHQ3j2M, {from: accounts[0]});
		const addressDdxdrpj = await Liquidity_v8HSf0IbX.transferOwnership.call(addresskZkK3fr, {from: accounts[1]});
		const addressVnvCpY9 = await Liquidity_v8HSf0IbX.owner.call({from: accounts[0]});
		await Liquidity_v8HSf0IbX.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringchD4ycy = "h8t2bTKuLJPCWlebIvKKlaZITj16epggmRLz8sLZsB3XvyPValWc"
		const addresskWdKfFN = accounts[2]
		const addressH8D0vXD = accounts[3]
		const uintllC1pQ7 = BigInt("599")
		const uintW77LF89 = BigInt("1778")
		const Liquidity_v8W3RTGTY = await Liquidity_v8.new(stringchD4ycy, addresskWdKfFN, addressH8D0vXD, uintllC1pQ7, uintW77LF89, {from: accounts[0]});
		const uintParbLOi = BigInt("80")
		const addressiWmI21i = accounts[2]
		const uintlfVowkd = BigInt("35")
		const addressimHKk8x = accounts[3]
		const boolwVJiJvt = await Liquidity_v8W3RTGTY.emergencyWithdraw.call({from: accounts[2]});
		const uint64zg1Iu6K = await Liquidity_v8W3RTGTY.setRate.call(uintParbLOi, {from: accounts[0]});
		const 
qJkRMlN = await Liquidity_v8W3RTGTY._hasAllowance.call(addressimHKk8x, uintlfVowkd, addressiWmI21i, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8W3RTGTY.onlyOwner.call({from: accounts[1]});
		const boolSOWVXIs = await Liquidity_v8W3RTGTY.isOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQwUxWb5 = "u17taysAPSlDd2v"
		const addressfaJ490N = accounts[1]
		const addresswWTLcb0 = accounts[1]
		const uintu0GjFeV = BigInt("642")
		const uintnnQ2w8i = BigInt("741")
		const Liquidity_v8eTtEZFz = await Liquidity_v8.new(stringQwUxWb5, addressfaJ490N, addresswWTLcb0, uintu0GjFeV, uintnnQ2w8i, {from: accounts[3]});
		const uintrHwBJIm = BigInt("1685")
		const uintWCDRz0V = BigInt("87")
		const addressrpGRVQH = accounts[2]
		const uintNSz8a01 = BigInt("702")
		const addressOKOTvG4 = accounts[3]
		const boolgQA2mOj = await Liquidity_v8eTtEZFz.stake.call(uintrHwBJIm, {from: accounts[0]});
		const boolbeMedFu = await Liquidity_v8eTtEZFz.addReward.call(uintWCDRz0V, {from: "0x0000000000000000000000000000000000000001"});
		const 
aVkYUkX = await Liquidity_v8eTtEZFz._hasAllowance.call(addressOKOTvG4, uintNSz8a01, addressrpGRVQH, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXdT2s96 = "CMf3KViicAPXCSGv70PAy21IuTjcfy60D052RB282XxXdIo1XkYUA9uUagZQFixun84pmPhvHBX3njcIwwlPW7bfXSv3J3P"
		const addressMGSwz4E = accounts[2]
		const addressb1aqky = "0x0000000000000000000000000000000000000001"
		const uintTalLLr5 = BigInt("141")
		const uintibsnwbg = BigInt("538")
		const Liquidity_v8Yf4rAmo = await Liquidity_v8.new(stringXdT2s96, addressMGSwz4E, addressb1aqky, uintTalLLr5, uintibsnwbg, {from: accounts[1]});
		const uintmceO3eJ = BigInt("1857")
		const addressAkOFgFN = accounts[4]
		const boolCIuYmRk = await Liquidity_v8Yf4rAmo.withdraw.call({from: accounts[5]});
		const boolcnAz5O = await Liquidity_v8Yf4rAmo.addReward.call(uintmceO3eJ, {from: accounts[3]});
		const addressjkHxp0j = await Liquidity_v8Yf4rAmo.transferOwnership.call(addressAkOFgFN, {from: accounts[2]});
		await Liquidity_v8Yf4rAmo.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringaQdzSi5 = "ytuQEyWbzVhBk4w9Cc7lEZjf1T7hoAw1RRCED9ViPE37qnpAw7V"
		const addressxQw1GT = "0x0000000000000000000000000000000000000001"
		const addresscuUzpjq = accounts[3]
		const uintZxouq4h = BigInt("1117")
		const uint1T8fsI = BigInt("1973")
		const Liquidity_v8F65kT9 = await Liquidity_v8.new(stringaQdzSi5, addressxQw1GT, addresscuUzpjq, uintZxouq4h, uint1T8fsI, {from: accounts[4]});
		const addressIi3IoX9 = accounts[1]
		const uintYIoAWra = BigInt("1103")
		const addressBYjb9nz = "0x0000000000000000000000000000000000000001"
		const addresstSLoaDV = await Liquidity_v8F65kT9.transferOwnership.call(addressIi3IoX9, {from: accounts[4]});
		const boolsoTHfep = await Liquidity_v8F65kT9.addReward.call(uintYIoAWra, {from: accounts[0]});
		const 
q2VhLb = await Liquidity_v8F65kT9.userDeposits.call(addressBYjb9nz, {from: accounts[4]});
		const boolAlk3Y3x = await Liquidity_v8F65kT9.withdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbvF55mO = "9357gC3aVLjWty"
		const address4gc2i2 = accounts[4]
		const addressrzs9i8a = accounts[2]
		const uintKcwCPLG = BigInt("16")
		const uintI6uoWzg = BigInt("119")
		const Liquidity_v8aTn0CtK = await Liquidity_v8.new(stringbvF55mO, address4gc2i2, addressrzs9i8a, uintKcwCPLG, uintI6uoWzg, {from: accounts[3]});
		const addressVFIjNSf = accounts[2]
		const addressPyc2imN = "0x0000000000000000000000000000000000000001"
		const addressyPXS2d8 = accounts[1]
		const addressIZYCw5a = await Liquidity_v8aTn0CtK.owner.call({from: accounts[4]});
		const 
WmYOOh5 = await Liquidity_v8aTn0CtK.userDeposits.call(addressVFIjNSf, {from: accounts[5]});
		await Liquidity_v8aTn0CtK.renounceOwnership.call({from: accounts[0]});
		const uint256SMh1fF5 = await Liquidity_v8aTn0CtK.calculate.call(addressPyc2imN, {from: accounts[4]});
		const 
zXTSxOo = await Liquidity_v8aTn0CtK.userDeposits.call(addressyPXS2d8, {from: accounts[2]});
		const boolY8Ozt0L = await Liquidity_v8aTn0CtK.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringkDRhnG6 = "SjbdGrVm8IibM9WHJQMEhmOjaSBm8NOUeFJN7BAWvw4nLpk68Q24RD7bI8JYVgO2ulptirlvgHxdBluH"
		const addressJWnPum8 = accounts[2]
		const addressmKMe6L = "0x0000000000000000000000000000000000000001"
		const uintaOv7vU7 = BigInt("116")
		const uintiMd3jvu = BigInt("709")
		const Liquidity_v8HSf0IbX = await Liquidity_v8.new(stringkDRhnG6, addressJWnPum8, addressmKMe6L, uintaOv7vU7, uintiMd3jvu, {from: accounts[3]});
		const addresseaNkbGF = accounts[5]
		const 
Q9KYOu = await Liquidity_v8HSf0IbX.userDeposits.call(addresseaNkbGF, {from: accounts[0]});
		await Liquidity_v8HSf0IbX.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbvF55mO = "9357gC3aVLjWty"
		const addressUS3Tz1y = accounts[4]
		const addressICdtWO = accounts[2]
		const uintqI8adI3 = BigInt("16")
		const uintTs6xGCP = BigInt("119")
		const Liquidity_v8aTn0CtK = await Liquidity_v8.new(stringbvF55mO, addressUS3Tz1y, addressICdtWO, uintqI8adI3, uintTs6xGCP, {from: accounts[3]});
		const addressI3HE7lS = accounts[2]
		const addressqnyRvAw = accounts[2]
		const addressk0C5KXR = accounts[6]
		const uintiLaRbso = BigInt("1131")
		const 
WmYOOh5 = await Liquidity_v8aTn0CtK.userDeposits.call(addressI3HE7lS, {from: accounts[5]});
		const uint256SMh1fF5 = await Liquidity_v8aTn0CtK.calculate.call(addressqnyRvAw, {from: accounts[4]});
		const 
GAiOs0i = await Liquidity_v8aTn0CtK.userDeposits.call(addressk0C5KXR, {from: accounts[5]});
		const uint256PrEiOA3 = await Liquidity_v8aTn0CtK.changeLockDuration.call(uintiLaRbso, {from: accounts[3]});
		const boolY8Ozt0L = await Liquidity_v8aTn0CtK.isOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbvF55mO = "9357gC3aVLjWty"
		const addresstWoxzZs = accounts[4]
		const address34U132 = accounts[2]
		const uintQdr3rbn = BigInt("16")
		const uintb8rMS2m = BigInt("119")
		const Liquidity_v8aTn0CtK = await Liquidity_v8.new(stringbvF55mO, addresstWoxzZs, address34U132, uintQdr3rbn, uintb8rMS2m, {from: accounts[3]});
		const addresswjd5qo5 = accounts[4]
		const addressLqETP4S = "0x00000000000000000000000000000000000000-1"
		const uintOcrg0Jb = BigInt("931")
		const addressFsqtCt = accounts[4]
		const addressJR0PR2a = accounts[4]
		const uint256SMh1fF5 = await Liquidity_v8aTn0CtK.calculate.call(addresswjd5qo5, {from: accounts[4]});
		const 
zXTSxOo = await Liquidity_v8aTn0CtK.userDeposits.call(addressLqETP4S, {from: accounts[2]});
		const uint256ltF3bJ = await Liquidity_v8aTn0CtK.changeLockDuration.call(uintOcrg0Jb, {from: accounts[1]});
		const addressOzvy9Sn = await Liquidity_v8aTn0CtK.transferOwnership.call(addressFsqtCt, {from: accounts[5]});
		const boolY8Ozt0L = await Liquidity_v8aTn0CtK.isOwner.call({from: accounts[4]});
		const addressaPIkr5C = await Liquidity_v8aTn0CtK.transferOwnership.call(addressJR0PR2a, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringuuhnZe = "KYfYZHO"
		const addressbkzna1m = accounts[2]
		const addressMvayup = accounts[2]
		const uintFPkmwvU = BigInt("206")
		const uintpMu5xXd = BigInt("940")
		const Liquidity_v8sG2Z699 = await Liquidity_v8.new(stringuuhnZe, addressbkzna1m, addressMvayup, uintFPkmwvU, uintpMu5xXd, {from: accounts[4]});
		const addressaBF8A3Q = accounts[4]
		const uintAb9OyXP = BigInt("623")
		const addressfFU2zSB = accounts[0]
		const uint256dKMPmVq = await Liquidity_v8sG2Z699.calculate.call(addressaBF8A3Q, {from: accounts[0]});
		const uint64VlnuUu3 = await Liquidity_v8sG2Z699.setRate.call(uintAb9OyXP, {from: accounts[4]});
		const addressvUcptII = await Liquidity_v8sG2Z699.owner.call({from: accounts[4]});
		const 
YZsX8zm = await Liquidity_v8sG2Z699.userDeposits.call(addressfFU2zSB, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const string1Jnvo4 = "otQa2"
		const addressVUpL3aD = accounts[4]
		const addresshQPAmZ8 = accounts[0]
		const uintdWsjW6E = BigInt("1541")
		const uintkpwCw7x = BigInt("1275")
		const Liquidity_v8N1MvITv = await Liquidity_v8.new(string1Jnvo4, addressVUpL3aD, addresshQPAmZ8, uintdWsjW6E, uintkpwCw7x, {from: "0x0000000000000000000000000000000000000001"});
		const addressPAHvjFn = accounts[5]
		const addressPR4Vs1 = accounts[0]
		const uinte1OidxO = BigInt("170")
		const address9ENw2w = accounts[4]
		const uint256WHELmPj = await Liquidity_v8N1MvITv.calculate.call(addressPAHvjFn, {from: accounts[4]});
		const addressW7mO5pj = await Liquidity_v8N1MvITv.owner.call({from: accounts[3]});
		const 
Y3S1TzS = await Liquidity_v8N1MvITv.userDeposits.call(addressPR4Vs1, {from: accounts[4]});
		const uint64Fn58z7F = await Liquidity_v8N1MvITv.setRate.call(uinte1OidxO, {from: accounts[4]});
		const uint256WzFru9A = await Liquidity_v8N1MvITv.calculate.call(address9ENw2w, {from: accounts[3]});
		const boolC9qwyn4 = await Liquidity_v8N1MvITv.emergencyWithdraw.call({from: accounts[3]});
	});
})