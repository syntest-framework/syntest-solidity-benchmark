const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringTx7pBMb = "9tOyuJ4uvIk4826yzuRmELD6hmf6pCUYK9oTo2jgnIjVhM5EScjkIcb7Adm1qxCz0SV5NxgKOjAbXkwJxqednjL"
		const addressMeDj1dl = "0x0000000000000000000000000000000000000001"
		const addressVTadXye = accounts[3]
		const uintOW2nUrc = BigInt("1541")
		const uintWRlIdh1 = BigInt("1212")
		const Liquidity_v8dmUTq6 = await Liquidity_v8.new(stringTx7pBMb, addressMeDj1dl, addressVTadXye, uintOW2nUrc, uintWRlIdh1, {from: accounts[1]});
		const boolIPpJwsT = await Liquidity_v8dmUTq6.withdraw.call({from: accounts[3]});
		const boolTJ7rkiP = await Liquidity_v8dmUTq6.withdraw.call({from: accounts[2]});
		const boolY7MsZEz = await Liquidity_v8dmUTq6.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8dmUTq6.renounceOwnership.call({from: accounts[5]});
		const addressLOD40tU = await Liquidity_v8dmUTq6.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringftplgPw = "SV538hnO4kEeNAdpsKRtFrdTUh6n2sKINxkPTSU3jHQc"
		const addresskwjXRZC = accounts[4]
		const addressUN8gf3f = "0x0000000000000000000000000000000000000001"
		const uintQQjLKIs = BigInt("1784")
		const uintMpOt85z = BigInt("360")
		const Liquidity_v8yjBMTAm = await Liquidity_v8.new(stringftplgPw, addresskwjXRZC, addressUN8gf3f, uintQQjLKIs, uintMpOt85z, {from: accounts[0]});
		const addressqnXJtGN = "0x0000000000000000000000000000000000000001"
		const uintjyGnxty = BigInt("709")
		const uintUk3IqBq = BigInt("1931")
		const uint256fzRAW8N = await Liquidity_v8yjBMTAm.calculate.call(addressqnXJtGN, {from: "0x0000000000000000000000000000000000000001"});
		const boolfTKPoDG = await Liquidity_v8yjBMTAm.emergencyWithdraw.call({from: accounts[0]});
		const boolm5v226g = await Liquidity_v8yjBMTAm.stake.call(uintjyGnxty, {from: accounts[2]});
		const booliyBI3g = await Liquidity_v8yjBMTAm.withdraw.call({from: accounts[0]});
		const uint256EFcvSBC = await Liquidity_v8yjBMTAm.changeLockDuration.call(uintUk3IqBq, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXsWYe43 = "DrhcWVLQSUCkFwVX8rxuqGiiK2AzN6DU9Qp37kjVmQfxGg1FcKWKC2BXLuMHAuKKAmViqv76adzIclcwdBQjTEyu"
		const addressVpL3Qz = accounts[2]
		const addressI0fR2dv = accounts[4]
		const uintmktoTTL = BigInt("539")
		const uintabYmzn = BigInt("1143")
		const Liquidity_v8cp22LtF = await Liquidity_v8.new(stringXsWYe43, addressVpL3Qz, addressI0fR2dv, uintmktoTTL, uintabYmzn, {from: accounts[2]});
		const uintpuHKy4a = BigInt("1433")
		const uintSJlnlQo = BigInt("957")
		const uint256LW5abav = await Liquidity_v8cp22LtF.changeLockDuration.call(uintpuHKy4a, {from: accounts[0]});
		const uint256xuOfOZ = await Liquidity_v8cp22LtF.changeLockDuration.call(uintSJlnlQo, {from: accounts[1]});
		const booln2VsFG2 = await Liquidity_v8cp22LtF.isOwner.call({from: accounts[2]});
		const boolWJuYyo = await Liquidity_v8cp22LtF.withdraw.call({from: accounts[0]});
		const boolEgEA5hP = await Liquidity_v8cp22LtF.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyYPznZr = "KDqMeCx"
		const addressnmIRfuL = accounts[5]
		const addressoDIOPhE = accounts[3]
		const uintf1L72fC = BigInt("1023")
		const uintw55CTAJ = BigInt("32")
		const Liquidity_v8pYqMrfK = await Liquidity_v8.new(stringyYPznZr, addressnmIRfuL, addressoDIOPhE, uintf1L72fC, uintw55CTAJ, {from: accounts[1]});
		const uintk199Wqf = BigInt("686")
		const boolDyFfjTb = await Liquidity_v8pYqMrfK.stake.call(uintk199Wqf, {from: accounts[3]});
		const boolpXLYIvB = await Liquidity_v8pYqMrfK.isOwner.call({from: accounts[2]});
		await Liquidity_v8pYqMrfK.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringEePobV7 = "KPKWxrZ4R7QcLPaoVjjxqZC6T7f83hARV081ujA7FOfjj2UYgM3L"
		const addressRV6kvVy = accounts[3]
		const addresscenJOak = accounts[0]
		const uintkvW3t2c = BigInt("110")
		const uintrwXxSht = BigInt("1516")
		const Liquidity_v8jqgDYYs = await Liquidity_v8.new(stringEePobV7, addressRV6kvVy, addresscenJOak, uintkvW3t2c, uintrwXxSht, {from: accounts[2]});
		const addressDuqSbhM = accounts[5]
		await Liquidity_v8jqgDYYs.renounceOwnership.call({from: accounts[2]});
		const boolqzCdYcf = await Liquidity_v8jqgDYYs.withdraw.call({from: accounts[1]});
		await Liquidity_v8jqgDYYs.onlyOwner.call({from: accounts[5]});
		const addressX4NxAD9 = await Liquidity_v8jqgDYYs.transferOwnership.call(addressDuqSbhM, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringnYORdBB = "8xsLGqzcr3FzeEOk8f5YC92geA0Q5cMtiOpRo45xk2Bd9EvP2GxxOp2tcdfNY52yCeYuUWejGbZlPcDFLpkbm2XyHv"
		const addressr7XMJh = accounts[2]
		const addressZhlgmn = accounts[4]
		const uintAtmTbh3 = BigInt("336")
		const uintF7Oz0B = BigInt("1354")
		const Liquidity_v8FOyOjWQ = await Liquidity_v8.new(stringnYORdBB, addressr7XMJh, addressZhlgmn, uintAtmTbh3, uintF7Oz0B, {from: "0x0000000000000000000000000000000000000001"});
		const uintbPEhxZE = BigInt("1744")
		const uintehLimY = BigInt("1444")
		const uintvbeFZ0U = BigInt("214")
		const boolB9pizH = await Liquidity_v8FOyOjWQ.isOwner.call({from: accounts[2]});
		const boolUWxKQGq = await Liquidity_v8FOyOjWQ.addReward.call(uintbPEhxZE, {from: accounts[4]});
		const uint64TAfIsrm = await Liquidity_v8FOyOjWQ.setRate.call(uintehLimY, {from: accounts[4]});
		const boolwBSIdMg = await Liquidity_v8FOyOjWQ.addReward.call(uintvbeFZ0U, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringftplgPw = "SV538hnO4kEeNAdpsKRtFrdTUh6n2sKINxkPTSU3jHQc"
		const addressYGLJycY = accounts[4]
		const addresscXIG1qr = "0x0000000000000000000000000000000000000001"
		const uintIce18pF = BigInt("1784")
		const uintdFobER1 = BigInt("360")
		const Liquidity_v8yjBMTAm = await Liquidity_v8.new(stringftplgPw, addressYGLJycY, addresscXIG1qr, uintIce18pF, uintdFobER1, {from: accounts[0]});
		const address46ljEO = "0x0000000000000000000000000000000000000001"
		const uintBAuheyq = BigInt("1931")
		const uint256fzRAW8N = await Liquidity_v8yjBMTAm.calculate.call(address46ljEO, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8yjBMTAm.onlyOwner.call({from: accounts[2]});
		const boolfTKPoDG = await Liquidity_v8yjBMTAm.emergencyWithdraw.call({from: accounts[0]});
		const booliyBI3g = await Liquidity_v8yjBMTAm.withdraw.call({from: accounts[0]});
		const uint256EFcvSBC = await Liquidity_v8yjBMTAm.changeLockDuration.call(uintBAuheyq, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlOrpAEQ = "UXROPcU13VelV2nRuFZ6EnqgHOsYJYNMwMR7SsDxquxXveD2FO5KlNcFqkpzJVriop40Fn6gn0puPVV9ei6"
		const addressY7YyFjO = accounts[2]
		const addressOW7z1Ki = accounts[3]
		const uintuE2oDt1 = BigInt("421")
		const uintMnXdE86 = BigInt("1627")
		const Liquidity_v8Sl0JHCy = await Liquidity_v8.new(stringlOrpAEQ, addressY7YyFjO, addressOW7z1Ki, uintuE2oDt1, uintMnXdE86, {from: accounts[4]});
		const uintrEQ8CJL = BigInt("1001")
		const uints7rx2jz = BigInt("1684")
		const uint256kTamnxC = await Liquidity_v8Sl0JHCy.changeLockDuration.call(uintrEQ8CJL, {from: accounts[4]});
		const uint256JBa52HP = await Liquidity_v8Sl0JHCy.changeLockDuration.call(uints7rx2jz, {from: accounts[3]});
		const boolyeFZnwd = await Liquidity_v8Sl0JHCy.emergencyWithdraw.call({from: accounts[2]});
		const boolcN1fVDe = await Liquidity_v8Sl0JHCy.emergencyWithdraw.call({from: accounts[3]});
		const addressQ7Oa9rf = await Liquidity_v8Sl0JHCy.owner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringftplgPw = "SV538hnO4kEeNAdpsKRtFrdTUh6n2sKINxkPTSU3jHQc"
		const addressCDltUw = accounts[4]
		const addressySXUMZq = "0x0000000000000000000000000000000000000001"
		const uinthJTVpSM = BigInt("1784")
		const uintkh56qG = BigInt("360")
		const Liquidity_v8yjBMTAm = await Liquidity_v8.new(stringftplgPw, addressCDltUw, addressySXUMZq, uinthJTVpSM, uintkh56qG, {from: accounts[0]});
		const addressp57Tx60 = accounts[5]
		const addressfEODjpG = "0x0000000000000000000000000000000000000001"
		const uintGaU3wuc = BigInt("695")
		const uintpCr9lO6 = BigInt("1931")
		const 
ZyYqaAG = await Liquidity_v8yjBMTAm.userDeposits.call(addressp57Tx60, {from: accounts[2]});
		const uint256fzRAW8N = await Liquidity_v8yjBMTAm.calculate.call(addressfEODjpG, {from: "0x0000000000000000000000000000000000000001"});
		const boolSoXdiIo = await Liquidity_v8yjBMTAm.withdraw.call({from: accounts[1]});
		const boolfTKPoDG = await Liquidity_v8yjBMTAm.emergencyWithdraw.call({from: accounts[0]});
		const boolm5v226g = await Liquidity_v8yjBMTAm.stake.call(uintGaU3wuc, {from: accounts[2]});
		const uint256EFcvSBC = await Liquidity_v8yjBMTAm.changeLockDuration.call(uintpCr9lO6, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringYdL679t = "WBMUrO6addswsnmjYyBOpknv0sna5NXNxxVTv79dMLiGlu1F0PUPU84CqcTiuurBw61v2xdpDUYv"
		const addressjZJxTe = accounts[0]
		const addressHf116V6 = accounts[4]
		const uintDuxGF1j = BigInt("64")
		const uintSFZRIw6 = BigInt("1318")
		const Liquidity_v8XMd9yyj = await Liquidity_v8.new(stringYdL679t, addressjZJxTe, addressHf116V6, uintDuxGF1j, uintSFZRIw6, {from: accounts[4]});
		const addressc8vYqep = accounts[0]
		const uintVHx6iIV = BigInt("1099")
		const uintdVTH95Q = BigInt("1062")
		const 
AivbCMM = await Liquidity_v8XMd9yyj.userDeposits.call(addressc8vYqep, {from: accounts[5]});
		const uint64Rwa2Gph = await Liquidity_v8XMd9yyj.setRate.call(uintVHx6iIV, {from: accounts[4]});
		const uint256Y1y0ea4 = await Liquidity_v8XMd9yyj.changeLockDuration.call(uintdVTH95Q, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringT5OemLY = ""
		const addressO5MXAQw = accounts[1]
		const addressrSUaIFx = accounts[0]
		const uintWIDJ6Om = BigInt("1429")
		const uintARemmvp = BigInt("952")
		const Liquidity_v8bSHJMbN = await Liquidity_v8.new(stringT5OemLY, addressO5MXAQw, addressrSUaIFx, uintWIDJ6Om, uintARemmvp, {from: accounts[3]});
		const uintdF2pkvR = BigInt("1451")
		const uintriOS7WC = BigInt("1342")
		const addressWAXwLId = accounts[4]
		const addressdfrb5Ig = await Liquidity_v8bSHJMbN.owner.call({from: accounts[3]});
		const booleBWqRY = await Liquidity_v8bSHJMbN.stake.call(uintdF2pkvR, {from: accounts[2]});
		const boolek3uzOK = await Liquidity_v8bSHJMbN.addReward.call(uintriOS7WC, {from: accounts[1]});
		const 
FDXxD8C = await Liquidity_v8bSHJMbN.userDeposits.call(addressWAXwLId, {from: accounts[2]});
		const booltqWDJ8v = await Liquidity_v8bSHJMbN.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringEePobV7 = "KPKWxrZ4R7QcLPaoVjjxqZC6T7f83hARV081ujA7FOfjj2UYgM3L"
		const addressAQdxnOb = accounts[3]
		const addressK2mEzH3 = accounts[0]
		const uintgIajyb0 = BigInt("110")
		const uintJrBOm7Y = BigInt("1516")
		const Liquidity_v8jqgDYYs = await Liquidity_v8.new(stringEePobV7, addressAQdxnOb, addressK2mEzH3, uintgIajyb0, uintJrBOm7Y, {from: accounts[2]});
		const addressuiCuIQ = accounts[3]
		const addressXY7pDo = await Liquidity_v8jqgDYYs.transferOwnership.call(addressuiCuIQ, {from: accounts[2]});
		const boolqzCdYcf = await Liquidity_v8jqgDYYs.withdraw.call({from: accounts[1]});
	});
})