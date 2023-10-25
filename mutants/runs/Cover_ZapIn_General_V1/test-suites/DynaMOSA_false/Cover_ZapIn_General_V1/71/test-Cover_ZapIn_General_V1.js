const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintanug4Nn = BigInt("196")
		const Cover_ZapIn_General_V1TAqsop = await Cover_ZapIn_General_V1.new(uintanug4Nn, {from: accounts[1]});
		const addressIimacv9 = accounts[0]
		const addressDdZKKUk = accounts[2]
		const uintrTEhm9 = BigInt("1621")
		const addressUp75gTi = accounts[4]
		await Cover_ZapIn_General_V1TAqsop.withdraw.call({from: accounts[1]});
		await Cover_ZapIn_General_V1TAqsop.stopInEmergency.call({from: accounts[0]});
		const 
v4PdZVg = await Cover_ZapIn_General_V1TAqsop._enterPosition.call(addressUp75gTi, uintrTEhm9, addressDdZKKUk, addressIimacv9, {from: accounts[1]});
		const boolZC9DZrW = await Cover_ZapIn_General_V1TAqsop.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1TAqsop.withdraw.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUCZLnCU = BigInt("1476")
		const Cover_ZapIn_General_V1FaW2GmU = await Cover_ZapIn_General_V1.new(uintUCZLnCU, {from: accounts[0]});
		const address8M0VPc = accounts[1]
		const addressCDEkkHZ = await Cover_ZapIn_General_V1FaW2GmU.transferOwnership.call(address8M0VPc, {from: accounts[3]});
		await Cover_ZapIn_General_V1FaW2GmU.toggleContractActive.call({from: accounts[1]});
		await Cover_ZapIn_General_V1FaW2GmU.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1FaW2GmU.withdraw.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint0SHVES = BigInt("736")
		const Cover_ZapIn_General_V1q7PvtvT = await Cover_ZapIn_General_V1.new(uint0SHVES, {from: accounts[4]});
		const addressZiN3Odp = accounts[3]
		const addressGEoeGrx = accounts[0]
		const addressWl4MAim = accounts[2]
		const uintlQAYs1l = BigInt("1384")
		const addressV2gxxwR = accounts[1]
		const addressVaVVZ0J = await Cover_ZapIn_General_V1q7PvtvT.inCaseTokengetsStuck.call(addressZiN3Odp, {from: accounts[4]});
		await Cover_ZapIn_General_V1q7PvtvT.renounceOwnership.call({from: accounts[1]});
		const 
LPdp4rt = await Cover_ZapIn_General_V1q7PvtvT._enterPosition.call(addressV2gxxwR, uintlQAYs1l, addressWl4MAim, addressGEoeGrx, {from: accounts[3]});
		const addressy3Sxn8H = await Cover_ZapIn_General_V1q7PvtvT.owner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwvDbv7 = BigInt("1092")
		const Cover_ZapIn_General_V1dKgVren = await Cover_ZapIn_General_V1.new(uintwvDbv7, {from: accounts[5]});
		const byteRMqPQvp = "0x1b1a100d011a0f0b03161e1a03201f1704141c20031c1a08"
		const addressSFA5A1C = "0x0000000000000000000000000000000000000001"
		const addresstUKDNOW = accounts[0]
		const uintkKzJLvo = BigInt("1464")
		const addressR8Rv7bc = accounts[2]
		const addressaHHsfNW = "0x0000000000000000000000000000000000000001"
		const addressRLeA92 = accounts[0]
		const addressLs6YoWD = accounts[4]
		const addressiuaWCN = accounts[4]
		const uintguIdZw = BigInt("1614")
		const addressGseE6zu = accounts[2]
		const 
lBvFDXH = await Cover_ZapIn_General_V1dKgVren.ZapIn.call(addressLs6YoWD, addressRLeA92, addressaHHsfNW, addressR8Rv7bc, uintkKzJLvo, addresstUKDNOW, addressSFA5A1C, byteRMqPQvp, {from: accounts[2]});
		await Cover_ZapIn_General_V1dKgVren.toggleContractActive.call({from: accounts[2]});
		await Cover_ZapIn_General_V1dKgVren.stopInEmergency.call({from: accounts[1]});
		const addressmvqHnuM = await Cover_ZapIn_General_V1dKgVren.transferOwnership.call(addressiuaWCN, {from: accounts[0]});
		await Cover_ZapIn_General_V1dKgVren._enterCover.call(addressGseE6zu, uintguIdZw, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintot0epON = BigInt("170")
		const Cover_ZapIn_General_V1YKjkbHD = await Cover_ZapIn_General_V1.new(uintot0epON, {from: "0x0000000000000000000000000000000000000001"});
		const addressN7BlkDf = accounts[2]
		const boolwUZiJli = await Cover_ZapIn_General_V1YKjkbHD.isOwner.call({from: accounts[2]});
		const addressJBlA4Pj = await Cover_ZapIn_General_V1YKjkbHD.inCaseTokengetsStuck.call(addressN7BlkDf, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintI4TMYu9 = BigInt("1092")
		const Cover_ZapIn_General_V1dKgVren = await Cover_ZapIn_General_V1.new(uintI4TMYu9, {from: accounts[5]});
		const addressbWXVEA = accounts[1]
		const byteNLZQ61X = "0x1b1a100d011a0f0b03161e1a03201f1704141c20031c1a08"
		const addressD5IAG4f = "0x0000000000000000000000000000000000000001"
		const addressUeNg14I = accounts[0]
		const uintje06GSx = BigInt("1464")
		const addresszV6Xfbz = accounts[2]
		const addressqWOPwf = "0x0000000000000000000000000000000000000001"
		const addressxG65fdg = accounts[0]
		const addresscgKr5yE = accounts[4]
		const addresspufPszu = accounts[4]
		const uintrGKeDZi = BigInt("1151")
		const addresslQd9Mh = accounts[2]
		const addressbWgWRDm = accounts[4]
		const uintOO5Ptxg = BigInt("1614")
		const addressMJJqM85 = accounts[2]
		const address40Jy0v = await Cover_ZapIn_General_V1dKgVren.transferOwnership.call(addressbWXVEA, {from: accounts[5]});
		const 
lBvFDXH = await Cover_ZapIn_General_V1dKgVren.ZapIn.call(addresscgKr5yE, addressxG65fdg, addressqWOPwf, addresszV6Xfbz, uintje06GSx, addressUeNg14I, addressD5IAG4f, byteNLZQ61X, {from: accounts[2]});
		await Cover_ZapIn_General_V1dKgVren.toggleContractActive.call({from: accounts[2]});
		await Cover_ZapIn_General_V1dKgVren.stopInEmergency.call({from: accounts[1]});
		const 
ywAmN0S = await Cover_ZapIn_General_V1dKgVren._getCoverDetails.call(addresspufPszu, {from: accounts[0]});
		await Cover_ZapIn_General_V1dKgVren._enterCover.call(addresslQd9Mh, uintrGKeDZi, {from: accounts[0]});
		const addressmvqHnuM = await Cover_ZapIn_General_V1dKgVren.transferOwnership.call(addressbWgWRDm, {from: accounts[0]});
		await Cover_ZapIn_General_V1dKgVren._enterCover.call(addressMJJqM85, uintOO5Ptxg, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEw2E16T = BigInt("1142")
		const Cover_ZapIn_General_V1PAmF6n7 = await Cover_ZapIn_General_V1.new(uintEw2E16T, {from: accounts[0]});
		const addressah9TZR = await Cover_ZapIn_General_V1PAmF6n7.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1PAmF6n7.toggleContractActive.call({from: accounts[0]});
		const booljCALSzM = await Cover_ZapIn_General_V1PAmF6n7.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1PAmF6n7.toggleContractActive.call({from: accounts[4]});
		const addressWV8yvSI = await Cover_ZapIn_General_V1PAmF6n7.owner.call({from: accounts[3]});
	});
})