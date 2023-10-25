const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringSGZAF73 = "YOVT7Ol7LupYt77R3iPMA5reGrjqEcaliJznXHo7yz1q"
		const addressAXE5QGZ = accounts[2]
		const addresscQL1J7k = accounts[1]
		const uintQoGz1Bc = BigInt("1795")
		const uinttHKZFQH = BigInt("430")
		const Liquidity_v8NA55ZwV = await Liquidity_v8.new(stringSGZAF73, addressAXE5QGZ, addresscQL1J7k, uintQoGz1Bc, uinttHKZFQH, {from: accounts[1]});
		const addressA1aXcW1 = accounts[2]
		const uintBbbhokL = BigInt("1805")
		const addressHZX3CB7 = accounts[0]
		const addressdCCDfIk = accounts[4]
		const uintM93JgFI = BigInt("471")
		const boolwi5ZwQp = await Liquidity_v8NA55ZwV.emergencyWithdraw.call({from: accounts[4]});
		const 
eePKIFe = await Liquidity_v8NA55ZwV._hasAllowance.call(addressHZX3CB7, uintBbbhokL, addressA1aXcW1, {from: accounts[1]});
		const uint256QUP5gFv = await Liquidity_v8NA55ZwV.calculate.call(addressdCCDfIk, {from: accounts[3]});
		await Liquidity_v8NA55ZwV.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint64rR2Og3B = await Liquidity_v8NA55ZwV.setRate.call(uintM93JgFI, {from: accounts[3]});
		await Liquidity_v8NA55ZwV.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringz1gmg5J = "26Ar57mv5oBGTe9faDJjUG1TbvkHiI2IVjzF567xTw5ZQ1PJH9wV6GXb8NkS2IK8tS6rgSKuqUJ2uvbph3YCxR7ELWb7brz3"
		const addresslmdyvSq = accounts[1]
		const addressPTg4VE7 = accounts[4]
		const uintnJlNYd8 = BigInt("1437")
		const uintokvaAgT = BigInt("1422")
		const Liquidity_v8AyN7jge = await Liquidity_v8.new(stringz1gmg5J, addresslmdyvSq, addressPTg4VE7, uintnJlNYd8, uintokvaAgT, {from: accounts[1]});
		const addressOF5sowr = accounts[0]
		const uintnb5PGLj = BigInt("1731")
		const uintiEe6lcu = BigInt("1824")
		const uint256ZVJc3LV = await Liquidity_v8AyN7jge.calculate.call(addressOF5sowr, {from: accounts[1]});
		const boolaS5Z663 = await Liquidity_v8AyN7jge.isOwner.call({from: accounts[4]});
		const boolE1hWU6g = await Liquidity_v8AyN7jge.addReward.call(uintnb5PGLj, {from: accounts[3]});
		const uint256aN6kBlq = await Liquidity_v8AyN7jge.changeLockDuration.call(uintiEe6lcu, {from: accounts[1]});
		const boolCgqfTg = await Liquidity_v8AyN7jge.withdraw.call({from: accounts[1]});
		await Liquidity_v8AyN7jge.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringq2DJJ6L = "FD1rE9yJl8JyJW0BNRPWNAaZgOGwcRPPQJyVXoeCeLljyokQitbKc70fA6SPAYSB6OwoEo3NfQrpAAD87AKouHz7q1SfhCpE"
		const addressClAdju = accounts[1]
		const addressHwTuTj = accounts[3]
		const uintThbra6u = BigInt("1695")
		const uintgJsvyjN = BigInt("777")
		const Liquidity_v8EvQUgbg = await Liquidity_v8.new(stringq2DJJ6L, addressClAdju, addressHwTuTj, uintThbra6u, uintgJsvyjN, {from: accounts[0]});
		const addressUVnTgwf = accounts[2]
		const booliZwwZdA = await Liquidity_v8EvQUgbg.withdraw.call({from: accounts[2]});
		const boolkxoNdl = await Liquidity_v8EvQUgbg.isOwner.call({from: accounts[1]});
		const boolNh6gVjU = await Liquidity_v8EvQUgbg.isOwner.call({from: accounts[4]});
		const 
knkca0e = await Liquidity_v8EvQUgbg.userDeposits.call(addressUVnTgwf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringqFMyi3M = "PAYICtJnDgFu5TkivflxqFfGczkHE1Jy8QkW4m1Frlj55GfPTX4XInC66HzxfUeU0pStjzdsKTg0JapkXg2X6svh"
		const addresswIJDF1H = accounts[1]
		const addressZw8gqS5 = accounts[3]
		const uint0dqzAX = BigInt("679")
		const uintEXtfhln = BigInt("1968")
		const Liquidity_v8aRqM4U6 = await Liquidity_v8.new(stringqFMyi3M, addresswIJDF1H, addressZw8gqS5, uint0dqzAX, uintEXtfhln, {from: accounts[1]});
		const addresslh91m9e = accounts[5]
		const uintKcx7yW = BigInt("916")
		const addressDYBiJNL = accounts[3]
		const addressVmWgNQQ = accounts[0]
		const uintsnrPDs = BigInt("420")
		const 
CW4xVpw = await Liquidity_v8aRqM4U6._hasAllowance.call(addressDYBiJNL, uintKcx7yW, addresslh91m9e, {from: accounts[4]});
		const boolfyZ4i46 = await Liquidity_v8aRqM4U6.isOwner.call({from: accounts[0]});
		const booltiDodlW = await Liquidity_v8aRqM4U6.isOwner.call({from: accounts[4]});
		const addresshFSVhS = await Liquidity_v8aRqM4U6.transferOwnership.call(addressVmWgNQQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolbTyNd1A = await Liquidity_v8aRqM4U6.stake.call(uintsnrPDs, {from: accounts[3]});
		const boolfzPs2e = await Liquidity_v8aRqM4U6.isOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpKiZ3y2 = "eCzfAiSXjHhO8EIzw6TtWH"
		const addressVdDfiVI = accounts[0]
		const addressJvhnufI = accounts[2]
		const uintbP8YnBz = BigInt("1653")
		const uintO6Cl26G = BigInt("208")
		const Liquidity_v8akWdUpP = await Liquidity_v8.new(stringpKiZ3y2, addressVdDfiVI, addressJvhnufI, uintbP8YnBz, uintO6Cl26G, {from: accounts[3]});
		const uintSamyTxy = BigInt("1217")
		const uintUVi3y6C = BigInt("376")
		const addressPfM9uiG = accounts[1]
		const uintWvFavXA = BigInt("1113")
		const addressZnzlmq = await Liquidity_v8akWdUpP.owner.call({from: accounts[1]});
		const boolptrJVty = await Liquidity_v8akWdUpP.addReward.call(uintSamyTxy, {from: accounts[1]});
		const uint256SDZ9SW = await Liquidity_v8akWdUpP.changeLockDuration.call(uintUVi3y6C, {from: accounts[2]});
		await Liquidity_v8akWdUpP.renounceOwnership.call({from: accounts[0]});
		const 
bz9GU4p = await Liquidity_v8akWdUpP.userDeposits.call(addressPfM9uiG, {from: accounts[2]});
		const boolZUA0Jb = await Liquidity_v8akWdUpP.addReward.call(uintWvFavXA, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringoralejg = "dxbmftY"
		const addresscAwaay8 = accounts[4]
		const addressJfW9Ric = accounts[0]
		const uintVTW980y = BigInt("1609")
		const uintIqjAUIw = BigInt("1488")
		const Liquidity_v8leKpOGw = await Liquidity_v8.new(stringoralejg, addresscAwaay8, addressJfW9Ric, uintVTW980y, uintIqjAUIw, {from: accounts[1]});
		await Liquidity_v8leKpOGw.renounceOwnership.call({from: accounts[2]});
		const boolFF1YU2i = await Liquidity_v8leKpOGw.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmj85JZo = await Liquidity_v8leKpOGw.emergencyWithdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringPgqrILH = "VRQ8sFHrYxW2j"
		const addresscsvnhP = "0x0000000000000000000000000000000000000001"
		const addressYC5rOld = accounts[3]
		const uintDiYk3CW = BigInt("508")
		const uintNamOSGK = BigInt("1304")
		const Liquidity_v8CSLH2EP = await Liquidity_v8.new(stringPgqrILH, addresscsvnhP, addressYC5rOld, uintDiYk3CW, uintNamOSGK, {from: accounts[4]});
		const addressMFqd7n7 = accounts[4]
		const uintwip4w4N = BigInt("209")
		const 
jXP0Bv = await Liquidity_v8CSLH2EP.userDeposits.call(addressMFqd7n7, {from: accounts[5]});
		const uint256FIh015G = await Liquidity_v8CSLH2EP.changeLockDuration.call(uintwip4w4N, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringLIYbLgB = "yxFyUjVSOrzObtuyZl98Q1fmSXhlgaGSNOMO8bwkcKuXyNN8a8ER844X2wL3PLzEhVS7DPxqcocm6Jqhhwt"
		const addressA3e6QFy = accounts[0]
		const addressaqZzGe = "0x0000000000000000000000000000000000000001"
		const uintBt2MBaj = BigInt("1848")
		const uintBuF1z5v = BigInt("1605")
		const Liquidity_v8u9Bckr = await Liquidity_v8.new(stringLIYbLgB, addressA3e6QFy, addressaqZzGe, uintBt2MBaj, uintBuF1z5v, {from: accounts[1]});
		await Liquidity_v8u9Bckr.renounceOwnership.call({from: accounts[1]});
		const boolMvonMne = await Liquidity_v8u9Bckr.withdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringPgqrILH = "VRQ8sFHrYxW2j"
		const addressjY9bZ1 = "0x0000000000000000000000000000000000000001"
		const addressP8oPEDS = accounts[3]
		const uintNbRH6Ex = BigInt("508")
		const uintd5HUGoy = BigInt("1304")
		const Liquidity_v8CSLH2EP = await Liquidity_v8.new(stringPgqrILH, addressjY9bZ1, addressP8oPEDS, uintNbRH6Ex, uintd5HUGoy, {from: accounts[4]});
		const addressCgLdCnm = "0x00000000000000000000000000000000000000-1"
		const addressFuZ4zyp = accounts[4]
		const 
xEMRbx9 = await Liquidity_v8CSLH2EP.userDeposits.call(addressCgLdCnm, {from: accounts[2]});
		const uint256jndPSHy = await Liquidity_v8CSLH2EP.calculate.call(addressFuZ4zyp, {from: accounts[1]});
		const bools0JDA3 = await Liquidity_v8CSLH2EP.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXefAuGi = "sqbkQ3YAfCHKxqJKhGFMpW2UuyWM9yb"
		const addressrdXbJ3p = accounts[4]
		const addressN8sPF6B = accounts[3]
		const uintDPfWpqC = BigInt("731")
		const uintjUw6mXA = BigInt("1781")
		const Liquidity_v8NdSgfQ = await Liquidity_v8.new(stringXefAuGi, addressrdXbJ3p, addressN8sPF6B, uintDPfWpqC, uintjUw6mXA, {from: accounts[2]});
		const uintnCinzjL = BigInt("1980")
		const addresseNKPXfQ = accounts[2]
		const uintVm4N18J = BigInt("1959")
		const uintbgkBDmA = BigInt("1705")
		const addressKP38gru = accounts[2]
		const addressmhcks9 = "0x0000000000000000000000000000000000000001"
		const uint64LB3wXIk = await Liquidity_v8NdSgfQ.setRate.call(uintnCinzjL, {from: accounts[2]});
		const 
pNaXOTJ = await Liquidity_v8NdSgfQ.userDeposits.call(addresseNKPXfQ, {from: accounts[1]});
		const boolj0lT83O = await Liquidity_v8NdSgfQ.stake.call(uintVm4N18J, {from: accounts[3]});
		const uint64pWpASrw = await Liquidity_v8NdSgfQ.setRate.call(uintbgkBDmA, {from: accounts[4]});
		const addressr2xWPIg = await Liquidity_v8NdSgfQ.transferOwnership.call(addressKP38gru, {from: accounts[5]});
		const uint256r6udxKK = await Liquidity_v8NdSgfQ.calculate.call(addressmhcks9, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWogu5yH = "6IeXOubqcG9DJIMRG29m3j2rwCztzCJDbvWaSjVyAu"
		const addressCe5x7p8 = accounts[0]
		const addressyaxLUv9 = accounts[5]
		const uintcqmTPNT = BigInt("1151")
		const uintq5F5WGq = BigInt("92")
		const Liquidity_v8WfXn6gq = await Liquidity_v8.new(stringWogu5yH, addressCe5x7p8, addressyaxLUv9, uintcqmTPNT, uintq5F5WGq, {from: "0x0000000000000000000000000000000000000001"});
		const uintdHSqS1 = BigInt("1164")
		const addressPdJcVSk = accounts[3]
		const addressCR2MLeV = accounts[1]
		const boolCWEMKTc = await Liquidity_v8WfXn6gq.addReward.call(uintdHSqS1, {from: accounts[0]});
		const addressptW85kl = await Liquidity_v8WfXn6gq.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressnz0ejo = await Liquidity_v8WfXn6gq.owner.call({from: accounts[0]});
		const uint256CUr10O2 = await Liquidity_v8WfXn6gq.calculate.call(addressPdJcVSk, {from: accounts[4]});
		await Liquidity_v8WfXn6gq.renounceOwnership.call({from: accounts[4]});
		const uint256cAh5wjS = await Liquidity_v8WfXn6gq.calculate.call(addressCR2MLeV, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringPgqrILH = "VRQ8sFHrYxW2j"
		const addressO5nOjJX = "0x0000000000000000000000000000000000000001"
		const addressngorAXZ = accounts[3]
		const uintKlqoI9O = BigInt("508")
		const uintgPOwrL2 = BigInt("1304")
		const Liquidity_v8CSLH2EP = await Liquidity_v8.new(stringPgqrILH, addressO5nOjJX, addressngorAXZ, uintKlqoI9O, uintgPOwrL2, {from: accounts[4]});
		const addressJgzlQ9d = "0x0000000000000000000000000000000000000000"
		const addressUAB5ZQn = accounts[1]
		const addressTHjS6I = "0x0000000000000000000000000000000000000001"
		const addresssDyhbqA = "0x0000000000000000000000000000000000000001"
		const 
xEMRbx9 = await Liquidity_v8CSLH2EP.userDeposits.call(addressJgzlQ9d, {from: accounts[2]});
		const 
DklV28 = await Liquidity_v8CSLH2EP.userDeposits.call(addressUAB5ZQn, {from: accounts[2]});
		const uint256s2KbUoj = await Liquidity_v8CSLH2EP.calculate.call(addressTHjS6I, {from: accounts[5]});
		const addresswhAf82l = await Liquidity_v8CSLH2EP.transferOwnership.call(addresssDyhbqA, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringz1gmg5J = "26Ar57mv5oBGTe9faDJjUG1TbvkHiI2IVjzF567xTw5ZQ1PJH9wV6GXb8NkS2IK8tS6rgSKuqUJ2uvbph3YCxR7ELWb7brz3"
		const addressJnTiZKD = accounts[1]
		const addresspbyTz1s = accounts[4]
		const uintF4UazSP = BigInt("1437")
		const uintwjelWTL = BigInt("1422")
		const Liquidity_v8AyN7jge = await Liquidity_v8.new(stringz1gmg5J, addressJnTiZKD, addresspbyTz1s, uintF4UazSP, uintwjelWTL, {from: accounts[1]});
		const addressrBlVMUi = accounts[0]
		const addressQvsW9HB = accounts[3]
		const uintbbtMxFa = BigInt("1824")
		const addressqrBlz6F = accounts[2]
		const uint256ZVJc3LV = await Liquidity_v8AyN7jge.calculate.call(addressrBlVMUi, {from: accounts[1]});
		const boolaS5Z663 = await Liquidity_v8AyN7jge.isOwner.call({from: accounts[4]});
		const 
e7BN9QT = await Liquidity_v8AyN7jge.userDeposits.call(addressQvsW9HB, {from: accounts[2]});
		const uint256aN6kBlq = await Liquidity_v8AyN7jge.changeLockDuration.call(uintbbtMxFa, {from: accounts[1]});
		await Liquidity_v8AyN7jge.onlyOwner.call({from: accounts[5]});
		const uint256PnRRRkM = await Liquidity_v8AyN7jge.calculate.call(addressqrBlz6F, {from: accounts[3]});
		await Liquidity_v8AyN7jge.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});
})