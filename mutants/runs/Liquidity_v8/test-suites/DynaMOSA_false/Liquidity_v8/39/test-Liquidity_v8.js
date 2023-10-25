const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringppXBdUu = "yLinFUKU2QvVF4z9EXEqF4P"
		const addresso2ZltIW = accounts[1]
		const addressTsFi4eN = accounts[2]
		const uintK2pETlm = BigInt("1446")
		const uintPteXjU5 = BigInt("1591")
		const Liquidity_v8IACjetg = await Liquidity_v8.new(stringppXBdUu, addresso2ZltIW, addressTsFi4eN, uintK2pETlm, uintPteXjU5, {from: accounts[2]});
		const addressweFA70b = accounts[1]
		const uintom1FoRC = BigInt("1346")
		const addressjCBNoD7 = accounts[0]
		const uintXCGtlO = BigInt("1370")
		const uintwKOZI1U = BigInt("634")
		const 
yX01JxH = await Liquidity_v8IACjetg.userDeposits.call(addressweFA70b, {from: accounts[2]});
		const bool9zVR1j = await Liquidity_v8IACjetg.addReward.call(uintom1FoRC, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8IACjetg.onlyOwner.call({from: accounts[1]});
		const 
IEuyH2v = await Liquidity_v8IACjetg.userDeposits.call(addressjCBNoD7, {from: accounts[1]});
		const uint256jUMH0mc = await Liquidity_v8IACjetg.changeLockDuration.call(uintXCGtlO, {from: accounts[5]});
		const boolYLdj2w = await Liquidity_v8IACjetg.addReward.call(uintwKOZI1U, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHCSShuS = "xuOsNBtXHd5SdsET9V0uJq5"
		const addressI79cpR = accounts[2]
		const addresscAox8XP = accounts[4]
		const uintIFZvrWg = BigInt("830")
		const uintU74UK6 = BigInt("987")
		const Liquidity_v8bjxC8Rq = await Liquidity_v8.new(stringHCSShuS, addressI79cpR, addresscAox8XP, uintIFZvrWg, uintU74UK6, {from: accounts[3]});
		const uintdcedAM8 = BigInt("1606")
		const addressNysenj = accounts[4]
		const uintisJQvRS = BigInt("714")
		const uintzhfSghr = BigInt("1788")
		await Liquidity_v8bjxC8Rq.renounceOwnership.call({from: accounts[4]});
		const boolw9xAgS = await Liquidity_v8bjxC8Rq.addReward.call(uintdcedAM8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Vn8Id3J = await Liquidity_v8bjxC8Rq.calculate.call(addressNysenj, {from: accounts[3]});
		const boolmUtC9Pv = await Liquidity_v8bjxC8Rq.addReward.call(uintisJQvRS, {from: accounts[3]});
		await Liquidity_v8bjxC8Rq.renounceOwnership.call({from: accounts[1]});
		const boolE2NHHMP = await Liquidity_v8bjxC8Rq.stake.call(uintzhfSghr, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWfjTfJb = "EGJxNryRhDGw9Gytw80m4mN36AuS1p8Cm9kAaR1b6lCz4Ygh"
		const addressyPVntji = accounts[0]
		const addressTeiMbl = accounts[3]
		const uintOnSpNC = BigInt("1404")
		const uintXh828N5 = BigInt("1785")
		const Liquidity_v8wRtbIAY = await Liquidity_v8.new(stringWfjTfJb, addressyPVntji, addressTeiMbl, uintOnSpNC, uintXh828N5, {from: accounts[0]});
		const addressu9yVF1P = accounts[1]
		const uintWrdhYv = BigInt("503")
		const 
KI3xJja = await Liquidity_v8wRtbIAY.userDeposits.call(addressu9yVF1P, {from: accounts[0]});
		await Liquidity_v8wRtbIAY.renounceOwnership.call({from: accounts[0]});
		const uint256pZl9vkX = await Liquidity_v8wRtbIAY.changeLockDuration.call(uintWrdhYv, {from: accounts[4]});
		const boolwqPsXGo = await Liquidity_v8wRtbIAY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8wRtbIAY.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringcqfv3gL = "sp9UOoAbkiugHplLoGkCMpIM57av7QIwaGMvO"
		const addressN3wHlia = accounts[4]
		const addressrODlZn = accounts[0]
		const uintYcaGI1u = BigInt("464")
		const uintJ3RyTaY = BigInt("1508")
		const Liquidity_v8X8CGL3u = await Liquidity_v8.new(stringcqfv3gL, addressN3wHlia, addressrODlZn, uintYcaGI1u, uintJ3RyTaY, {from: accounts[2]});
		const uintDLmrHV8 = BigInt("1174")
		const boolxnkcQMV = await Liquidity_v8X8CGL3u.withdraw.call({from: accounts[3]});
		const bool6Fvhqz = await Liquidity_v8X8CGL3u.withdraw.call({from: accounts[0]});
		const uint64jizZK5 = await Liquidity_v8X8CGL3u.setRate.call(uintDLmrHV8, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringxfB32bK = "kBmjizIRJSIz9Ye48zac8Yobh8ItpvDf9rgA3NzOUt3aDcP9geK5t"
		const addressO3yXjss = accounts[1]
		const addressGhQt7dH = accounts[4]
		const uintthfpXeZ = BigInt("431")
		const uintabFpQzC = BigInt("289")
		const Liquidity_v8UMdi27u = await Liquidity_v8.new(stringxfB32bK, addressO3yXjss, addressGhQt7dH, uintthfpXeZ, uintabFpQzC, {from: "0x0000000000000000000000000000000000000001"});
		const uintJInl2vB = BigInt("194")
		const uintsywZmB5 = BigInt("972")
		const addressflwKvEf = accounts[0]
		const uintcZpwZq = BigInt("6")
		const addresskuBNfJ9 = accounts[1]
		const booltdr0CvC = await Liquidity_v8UMdi27u.withdraw.call({from: accounts[4]});
		const boolX9SQGKp = await Liquidity_v8UMdi27u.addReward.call(uintJInl2vB, {from: accounts[5]});
		const boolf8db3OM = await Liquidity_v8UMdi27u.emergencyWithdraw.call({from: accounts[4]});
		const uint64otrte9x = await Liquidity_v8UMdi27u.setRate.call(uintsywZmB5, {from: accounts[2]});
		const 
w2wkXZ = await Liquidity_v8UMdi27u._hasAllowance.call(addresskuBNfJ9, uintcZpwZq, addressflwKvEf, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW7ywL8L = "P8ntxKjcyHM8IMe38O9Ni6jmYnDL2Kv3U3kfy"
		const addressoAKWUUd = accounts[4]
		const addressJDgd5lJ = accounts[4]
		const uintYRDzAOj = BigInt("470")
		const uintGKdNtPZ = BigInt("397")
		const Liquidity_v8gEh78Gy = await Liquidity_v8.new(stringW7ywL8L, addressoAKWUUd, addressJDgd5lJ, uintYRDzAOj, uintGKdNtPZ, {from: accounts[0]});
		await Liquidity_v8gEh78Gy.onlyOwner.call({from: accounts[0]});
		await Liquidity_v8gEh78Gy.onlyOwner.call({from: accounts[5]});
		await Liquidity_v8gEh78Gy.onlyOwner.call({from: accounts[0]});
		const addressH1spRY3 = await Liquidity_v8gEh78Gy.owner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringL27qAYp = "DHCR3xM8YznprdukXbLAqXzt"
		const addressLreNGOr = accounts[0]
		const addressDcDxvCU = accounts[1]
		const uintS47UkF3 = BigInt("758")
		const uintcyMdiuT = BigInt("572")
		const Liquidity_v8GAZTaIV = await Liquidity_v8.new(stringL27qAYp, addressLreNGOr, addressDcDxvCU, uintS47UkF3, uintcyMdiuT, {from: accounts[1]});
		const uintDyB61pW = BigInt("2011")
		const uintjRFlqZ8 = BigInt("543")
		const boolpAeMGtS = await Liquidity_v8GAZTaIV.emergencyWithdraw.call({from: accounts[3]});
		const boolp6nTnEe = await Liquidity_v8GAZTaIV.addReward.call(uintDyB61pW, {from: accounts[5]});
		await Liquidity_v8GAZTaIV.onlyOwner.call({from: accounts[2]});
		const boolIW8ol7 = await Liquidity_v8GAZTaIV.stake.call(uintjRFlqZ8, {from: accounts[5]});
		await Liquidity_v8GAZTaIV.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWfjTfJb = "EGJxNryRhDGw9Gytw80m4mN36AuS1p8Cm9kAaR1b6lCz4Ygh"
		const addressTSmedfU = accounts[0]
		const addressPQiNqKw = accounts[3]
		const uinteZMDel = BigInt("1404")
		const uintxCVouzP = BigInt("1785")
		const Liquidity_v8wRtbIAY = await Liquidity_v8.new(stringWfjTfJb, addressTSmedfU, addressPQiNqKw, uinteZMDel, uintxCVouzP, {from: accounts[0]});
		const uintHfv0Pma = BigInt("815")
		const addressI0y4LZW = accounts[0]
		const uint64B5FhsnD = await Liquidity_v8wRtbIAY.setRate.call(uintHfv0Pma, {from: accounts[0]});
		const 
KI3xJja = await Liquidity_v8wRtbIAY.userDeposits.call(addressI0y4LZW, {from: accounts[0]});
		const boolwqPsXGo = await Liquidity_v8wRtbIAY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8wRtbIAY.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWfjTfJb = "EGJxNryRhDGw9Gytw80m4mN36AuS1p8Cm9kAaR1b6lCz4Ygh"
		const addressTAC3lxm = accounts[0]
		const addressgFWTSem = accounts[3]
		const uint3METmJ = BigInt("1404")
		const uintLqn7oLs = BigInt("1785")
		const Liquidity_v8wRtbIAY = await Liquidity_v8.new(stringWfjTfJb, addressTAC3lxm, addressgFWTSem, uint3METmJ, uintLqn7oLs, {from: accounts[0]});
		const addressvZVjiKG = accounts[1]
		const uinteEAxDej = BigInt("1168")
		const uinttxeZE5Y = BigInt("474")
		const uintXeD79a6 = BigInt("491")
		const uintFxi5LNi = BigInt("118")
		const 
KI3xJja = await Liquidity_v8wRtbIAY.userDeposits.call(addressvZVjiKG, {from: accounts[0]});
		const uint256YrqfOR9 = await Liquidity_v8wRtbIAY.changeLockDuration.call(uinteEAxDej, {from: accounts[0]});
		const boolwqPsXGo = await Liquidity_v8wRtbIAY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boola9fkqGR = await Liquidity_v8wRtbIAY.addReward.call(uinttxeZE5Y, {from: accounts[1]});
		const addressfTKkTPM = await Liquidity_v8wRtbIAY.owner.call({from: accounts[0]});
		await Liquidity_v8wRtbIAY.onlyOwner.call({from: accounts[2]});
		const uint64sIzp0mq = await Liquidity_v8wRtbIAY.setRate.call(uintXeD79a6, {from: accounts[4]});
		const boolxUh5aAg = await Liquidity_v8wRtbIAY.addReward.call(uintFxi5LNi, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringu091Ni = "NVjUXjUDQgPRmagp2WfsORUnIIrLCyFks"
		const addressuAzgXnc = accounts[3]
		const addressjVUwq8A = accounts[4]
		const uintQUA3Kxh = BigInt("1461")
		const uintsSAKJSA = BigInt("1511")
		const Liquidity_v8dxrFG0l = await Liquidity_v8.new(stringu091Ni, addressuAzgXnc, addressjVUwq8A, uintQUA3Kxh, uintsSAKJSA, {from: accounts[2]});
		const addressgdJumOn = accounts[2]
		const addressJZ0R9JD = accounts[2]
		const uintSkiEY6V = BigInt("702")
		const addressv1rrxFT = accounts[1]
		const addresscBqQaN = accounts[1]
		const uintHfyuMe = BigInt("1631")
		const addressCimxrjS = accounts[2]
		const addressB2URq9j = await Liquidity_v8dxrFG0l.transferOwnership.call(addressgdJumOn, {from: accounts[2]});
		const 
Xg58OOy = await Liquidity_v8dxrFG0l._hasAllowance.call(addressv1rrxFT, uintSkiEY6V, addressJZ0R9JD, {from: accounts[3]});
		const 
CXkJIJU = await Liquidity_v8dxrFG0l._hasAllowance.call(addressCimxrjS, uintHfyuMe, addresscBqQaN, {from: accounts[1]});
		const addressC1Kn2NA = await Liquidity_v8dxrFG0l.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressTGPIjqi = await Liquidity_v8dxrFG0l.owner.call({from: accounts[5]});
		const booli3uAq0p = await Liquidity_v8dxrFG0l.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWfjTfJb = "EGJxNryRhDGw9Gytw80m4mN36AuS1p8Cm9kAaR1b6lCz4Ygh"
		const addressTsiFeDw = accounts[0]
		const addressu2pNXN4 = accounts[3]
		const uintkfIpt0y = BigInt("1404")
		const uintApIUeB = BigInt("1785")
		const Liquidity_v8wRtbIAY = await Liquidity_v8.new(stringWfjTfJb, addressTsiFeDw, addressu2pNXN4, uintkfIpt0y, uintApIUeB, {from: accounts[0]});
		const addressfryS1TO = accounts[1]
		const addressQNKhXm3 = accounts[1]
		const 
KI3xJja = await Liquidity_v8wRtbIAY.userDeposits.call(addressfryS1TO, {from: accounts[0]});
		await Liquidity_v8wRtbIAY.renounceOwnership.call({from: accounts[0]});
		const uint256xHLuDqF = await Liquidity_v8wRtbIAY.calculate.call(addressQNKhXm3, {from: accounts[0]});
		const boolwqPsXGo = await Liquidity_v8wRtbIAY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8wRtbIAY.onlyOwner.call({from: accounts[2]});
		await Liquidity_v8wRtbIAY.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWfjTfJb = "EGJxNryRhDGw9Gytw80m4mN36AuS1p8Cm9kAaR1b6lCz4Ygh"
		const addressXbfkG1Y = accounts[0]
		const addresslGBjlS = accounts[3]
		const uintylIPORZ = BigInt("1404")
		const uintHuhSacK = BigInt("1785")
		const Liquidity_v8wRtbIAY = await Liquidity_v8.new(stringWfjTfJb, addressXbfkG1Y, addresslGBjlS, uintylIPORZ, uintHuhSacK, {from: accounts[0]});
		const addressSEJc5k = accounts[3]
		const addressRTjNTOf = accounts[1]
		const addressXWYmnO3 = accounts[1]
		const uintA3xXQgO = BigInt("436")
		const addresstd5Txm = accounts[0]
		const 
KI3xJja = await Liquidity_v8wRtbIAY.userDeposits.call(addressSEJc5k, {from: accounts[0]});
		await Liquidity_v8wRtbIAY.renounceOwnership.call({from: accounts[0]});
		const address8CVW9O = await Liquidity_v8wRtbIAY.owner.call({from: accounts[1]});
		const uint256xHLuDqF = await Liquidity_v8wRtbIAY.calculate.call(addressRTjNTOf, {from: accounts[0]});
		const boolwqPsXGo = await Liquidity_v8wRtbIAY.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
EEsiiUY = await Liquidity_v8wRtbIAY._hasAllowance.call(addresstd5Txm, uintA3xXQgO, addressXWYmnO3, {from: accounts[1]});
		await Liquidity_v8wRtbIAY.onlyOwner.call({from: accounts[2]});
		await Liquidity_v8wRtbIAY.renounceOwnership.call({from: accounts[0]});
	});
})