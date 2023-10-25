const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringqIGnjzS = "xzdKeWFaAs4viLSJF2ljry8"
		const addressgBTZCdQ = accounts[1]
		const addressmEV9DjK = accounts[2]
		const uintsBc9522 = BigInt("662")
		const uintnpB03Mh = BigInt("156")
		const Liquidity_v8e9bXTEp = await Liquidity_v8.new(stringqIGnjzS, addressgBTZCdQ, addressmEV9DjK, uintsBc9522, uintnpB03Mh, {from: accounts[1]});
		const uintgEWwyLd = BigInt("1718")
		const uintOJiPnDj = BigInt("1314")
		const uintEW0Gzpc = BigInt("1092")
		const uint64y7vJR1C = await Liquidity_v8e9bXTEp.setRate.call(uintgEWwyLd, {from: accounts[3]});
		const boolaNRldv = await Liquidity_v8e9bXTEp.isOwner.call({from: accounts[4]});
		await Liquidity_v8e9bXTEp.renounceOwnership.call({from: accounts[4]});
		const uint256uFIutus = await Liquidity_v8e9bXTEp.changeLockDuration.call(uintOJiPnDj, {from: accounts[0]});
		const boolh0lMd2m = await Liquidity_v8e9bXTEp.stake.call(uintEW0Gzpc, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addresskXD2c5n = accounts[5]
		const addressPwri0uX = accounts[0]
		const uintBgi7bwY = BigInt("343")
		const uintD9kzDNC = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addresskXD2c5n, addressPwri0uX, uintBgi7bwY, uintD9kzDNC, {from: accounts[0]});
		const addressMzubk61 = accounts[1]
		const addressSx4jc0 = accounts[1]
		const uint2568y8oRh = await Liquidity_v8q3Bwh0t.calculate.call(addressMzubk61, {from: accounts[1]});
		const 
BY8SZ1W = await Liquidity_v8q3Bwh0t.userDeposits.call(addressSx4jc0, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringCByfJzX = "4DGEtzZ0gg5Jk5SYqbgLVh6jYOUbTkV85tR4AdXoHFVivMauX2AXJUtC19pgFtgwt"
		const addresse7hxdd = accounts[1]
		const addressPiIokNc = accounts[5]
		const uintYKyu7pC = BigInt("2021")
		const uintk1gdG3S = BigInt("149")
		const Liquidity_v8dfo5xX = await Liquidity_v8.new(stringCByfJzX, addresse7hxdd, addressPiIokNc, uintYKyu7pC, uintk1gdG3S, {from: accounts[0]});
		const addresscZ2IV0k = accounts[0]
		const uintE53yX52 = BigInt("475")
		const uintnkBE56e = BigInt("580")
		const uint256Is7BlQw = await Liquidity_v8dfo5xX.calculate.call(addresscZ2IV0k, {from: accounts[3]});
		const boolNC6r9Ub = await Liquidity_v8dfo5xX.addReward.call(uintE53yX52, {from: accounts[1]});
		const uint256FAw9Y5t = await Liquidity_v8dfo5xX.changeLockDuration.call(uintnkBE56e, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQuk0NFL = "MUIdtDHmlPdkLQwTIz3s8mA1zkXtVjZbMJ2GXvF4O6FTWIeWbtI"
		const addressY3YD3ok = accounts[2]
		const addressjoEO3US = accounts[2]
		const uintk40M47 = BigInt("1104")
		const uintat7FvV9 = BigInt("2034")
		const Liquidity_v8AmoNhEr = await Liquidity_v8.new(stringQuk0NFL, addressY3YD3ok, addressjoEO3US, uintk40M47, uintat7FvV9, {from: accounts[2]});
		const uintkbBbRKN = BigInt("764")
		const uintNGupkzl = BigInt("56")
		const addressfgev1i6 = accounts[3]
		await Liquidity_v8AmoNhEr.onlyOwner.call({from: accounts[2]});
		const uint256GuDgRaz = await Liquidity_v8AmoNhEr.changeLockDuration.call(uintkbBbRKN, {from: accounts[1]});
		const uint256hEsX6Uc = await Liquidity_v8AmoNhEr.changeLockDuration.call(uintNGupkzl, {from: accounts[5]});
		await Liquidity_v8AmoNhEr.renounceOwnership.call({from: accounts[1]});
		const boolecETe6i = await Liquidity_v8AmoNhEr.withdraw.call({from: accounts[2]});
		const 
izMBa2r = await Liquidity_v8AmoNhEr.userDeposits.call(addressfgev1i6, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringbjND7Gv = "flpocnvwNjBbyUxqsKQvRqm"
		const addressrWUQTmZ = accounts[0]
		const addressJyvJFRk = accounts[2]
		const uintVOHjur = BigInt("1225")
		const uintrSWe2Rx = BigInt("691")
		const Liquidity_v8p16n59 = await Liquidity_v8.new(stringbjND7Gv, addressrWUQTmZ, addressJyvJFRk, uintVOHjur, uintrSWe2Rx, {from: accounts[0]});
		const addressq0mYyKb = accounts[3]
		const addressRLVUgZY = accounts[2]
		const addressHAsgvbg = accounts[4]
		const addressLKLE0ba = await Liquidity_v8p16n59.transferOwnership.call(addressq0mYyKb, {from: accounts[0]});
		const 
u13a7Hh = await Liquidity_v8p16n59.userDeposits.call(addressRLVUgZY, {from: accounts[1]});
		const uint256cDOttNQ = await Liquidity_v8p16n59.calculate.call(addressHAsgvbg, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addressFKhxaYk = accounts[5]
		const addressrS903OB = accounts[0]
		const uintMXYrDq4 = BigInt("343")
		const uintPzeULGA = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addressFKhxaYk, addressrS903OB, uintMXYrDq4, uintPzeULGA, {from: accounts[0]});
		const addressIWPxDGX = accounts[3]
		const boolDNh4HGV = await Liquidity_v8q3Bwh0t.isOwner.call({from: accounts[1]});
		const boolB2nYc5 = await Liquidity_v8q3Bwh0t.emergencyWithdraw.call({from: accounts[0]});
		const uint2568y8oRh = await Liquidity_v8q3Bwh0t.calculate.call(addressIWPxDGX, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringVLby6Kc = "fl2WTdjFCVe3tbDAUJIJNZ42k4Q3soc3G43uvHZOI8zkbaP1V1yGfcer0SBqG92JD41atwssjnrDK4KX1jv7blG3YubSpN"
		const addressh2w2Gil = accounts[0]
		const addressAMO4D3G = accounts[2]
		const uintfTcM8Kr = BigInt("86")
		const uintXbYedf4 = BigInt("1103")
		const Liquidity_v8DxzxfNZ = await Liquidity_v8.new(stringVLby6Kc, addressh2w2Gil, addressAMO4D3G, uintfTcM8Kr, uintXbYedf4, {from: accounts[2]});
		const uintjQBQjdj = BigInt("1665")
		const addresszMk1WOp = accounts[0]
		const uint64LtgZhna = await Liquidity_v8DxzxfNZ.setRate.call(uintjQBQjdj, {from: accounts[2]});
		const 
lpcbvaa = await Liquidity_v8DxzxfNZ.userDeposits.call(addresszMk1WOp, {from: accounts[0]});
		const boolAQzguxm = await Liquidity_v8DxzxfNZ.emergencyWithdraw.call({from: accounts[1]});
		const boolJNPVlrL = await Liquidity_v8DxzxfNZ.withdraw.call({from: accounts[3]});
		const boolUzERfw9 = await Liquidity_v8DxzxfNZ.isOwner.call({from: accounts[5]});
		const boolzZ5JT3U = await Liquidity_v8DxzxfNZ.isOwner.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addressb7aZtBR = accounts[5]
		const addressc0fZWny = accounts[0]
		const uintjuhRUeC = BigInt("343")
		const uintVwUIwd3 = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addressb7aZtBR, addressc0fZWny, uintjuhRUeC, uintVwUIwd3, {from: accounts[0]});
		const addressbeB0Zu = accounts[4]
		const uintkHV2YMm = BigInt("1883")
		const boolr2BvPp = await Liquidity_v8q3Bwh0t.withdraw.call({from: accounts[0]});
		const 
BY8SZ1W = await Liquidity_v8q3Bwh0t.userDeposits.call(addressbeB0Zu, {from: accounts[5]});
		const boolpmWzSnH = await Liquidity_v8q3Bwh0t.stake.call(uintkHV2YMm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addressx6DZU0N = accounts[5]
		const addressFG3GocD = accounts[0]
		const uintnaimTQf = BigInt("343")
		const uintTxEGBCJ = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addressx6DZU0N, addressFG3GocD, uintnaimTQf, uintTxEGBCJ, {from: accounts[0]});
		const addressHVUyWLZ = accounts[2]
		const 
BY8SZ1W = await Liquidity_v8q3Bwh0t.userDeposits.call(addressHVUyWLZ, {from: accounts[5]});
		const addressok2Prdo = await Liquidity_v8q3Bwh0t.owner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addressSZlRWy6 = accounts[5]
		const addressUL2vGGX = accounts[0]
		const uintljsdOvC = BigInt("343")
		const uintyHQfWcy = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addressSZlRWy6, addressUL2vGGX, uintljsdOvC, uintyHQfWcy, {from: accounts[0]});
		const uintcJR0OIy = BigInt("547")
		const addressPssj48 = accounts[2]
		const addressgF5LOt = accounts[2]
		const uint256Pi4a1vG = await Liquidity_v8q3Bwh0t.changeLockDuration.call(uintcJR0OIy, {from: accounts[0]});
		const 
Qh1pJ2K = await Liquidity_v8q3Bwh0t.userDeposits.call(addressPssj48, {from: accounts[5]});
		const 
BY8SZ1W = await Liquidity_v8q3Bwh0t.userDeposits.call(addressgF5LOt, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHjv9Al6 = "XM31FKeyjN8ZspHOL8i5s2bFTvjMqWldWb0z"
		const addressE2bHnde = accounts[5]
		const addressV9GxvT = accounts[0]
		const uintSaCfLQY = BigInt("343")
		const uintq3ojeQY = BigInt("1763")
		const Liquidity_v8q3Bwh0t = await Liquidity_v8.new(stringHjv9Al6, addressE2bHnde, addressV9GxvT, uintSaCfLQY, uintq3ojeQY, {from: accounts[0]});
		const addresspCRimBs = accounts[3]
		const uint2568y8oRh = await Liquidity_v8q3Bwh0t.calculate.call(addresspCRimBs, {from: accounts[1]});
		await Liquidity_v8q3Bwh0t.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWKbA4l8 = "Rg2oT"
		const addressBHTI4hk = accounts[2]
		const addressyAFNEby = accounts[3]
		const uinti25w3JZ = BigInt("767")
		const uintlXVJ0Kt = BigInt("177")
		const Liquidity_v8TkdbkuJ = await Liquidity_v8.new(stringWKbA4l8, addressBHTI4hk, addressyAFNEby, uinti25w3JZ, uintlXVJ0Kt, {from: "0x0000000000000000000000000000000000000001"});
		const uintugyS9t4 = BigInt("1039")
		const addressI8PYLWI = accounts[4]
		const addresswe7AmRr = accounts[0]
		const addressxgwpHh = "0x0000000000000000000000000000000000000001"
		const boolCCbn6p9 = await Liquidity_v8TkdbkuJ.withdraw.call({from: accounts[0]});
		const boolgfxYrz1 = await Liquidity_v8TkdbkuJ.stake.call(uintugyS9t4, {from: accounts[5]});
		const 
NN8OcIR = await Liquidity_v8TkdbkuJ.userDeposits.call(addressI8PYLWI, {from: accounts[1]});
		const uint256a04Oo2 = await Liquidity_v8TkdbkuJ.calculate.call(addresswe7AmRr, {from: accounts[3]});
		const 
ruOtFuM = await Liquidity_v8TkdbkuJ.userDeposits.call(addressxgwpHh, {from: accounts[4]});
	});
})