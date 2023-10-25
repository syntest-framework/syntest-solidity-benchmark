const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGOKV35M = await LIBERAPAY.new({from: accounts[2]});
		const uintfbNp0OK = BigInt("1844")
		const addressrLH23G = accounts[4]
		const uinttv9AY5N = BigInt("873")
		const addresst1FKCjL = accounts[2]
		const uintSEJIaNO = BigInt("1689")
		const address2I4mlh = accounts[0]
		const uintTGUx892 = BigInt("941")
		const boolkqfwp65 = await LIBERAPAYGOKV35M.transfer.call(addressrLH23G, uintfbNp0OK, {from: accounts[3]});
		const uint256HzEWh9c = await LIBERAPAYGOKV35M.getNowTime.call({from: accounts[4]});
		const boolc8TyxQ8 = await LIBERAPAYGOKV35M.distribute.call(addresst1FKCjL, uinttv9AY5N, {from: accounts[2]});
		const boolQV81Se3 = await LIBERAPAYGOKV35M.approve.call(address2I4mlh, uintSEJIaNO, {from: "0x0000000000000000000000000000000000000001"});
		const boolBOrjyyt = await LIBERAPAYGOKV35M.burn.call(uintTGUx892, {from: accounts[1]});

		await expect(LIBERAPAYGOKV35M.transfer.call(addressrLH23G, uintfbNp0OK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNTfVxw = await LIBERAPAY.new({from: accounts[2]});
		const addressOSCQIpM = accounts[4]
		const addressVfd2Ztd = accounts[0]
		const uintQL57tEl = BigInt("1856")
		const addresszplLhlN = accounts[4]
		const uinteeLAPdv = BigInt("367")
		const uint5pLBmu = BigInt("734")
		const addressBF5xEt = accounts[3]
		const uint256xCQLkIG = await LIBERAPAYNTfVxw.allowance.call(addressVfd2Ztd, addressOSCQIpM, {from: accounts[1]});
		const boolyz2iZgL = await LIBERAPAYNTfVxw.distribute.call(addresszplLhlN, uintQL57tEl, {from: "0x0000000000000000000000000000000000000001"});
		const boolFi9pHkU = await LIBERAPAYNTfVxw.burn.call(uinteeLAPdv, {from: accounts[0]});
		const boolMNaldSo = await LIBERAPAYNTfVxw.transfer.call(addressBF5xEt, uint5pLBmu, {from: accounts[0]});
		await LIBERAPAYNTfVxw.unpause.call({from: accounts[0]});

		assert.equal(uint256xCQLkIG, BigInt("0"))
		await expect(LIBERAPAYNTfVxw.distribute.call(addresszplLhlN, uintQL57tEl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJqHIPJZ = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSlLjmp = BigInt("1058")
		const addressBvIDr4w = accounts[3]
		const addresskFnhp57 = accounts[1]
		const uintrIe7gmd = BigInt("540")
		const addressHk4sInn = accounts[1]
		const uintNJzXMcN = BigInt("1872")
		const addresszJGVz65 = accounts[0]
		const boolv0pLE0U = await LIBERAPAYJqHIPJZ.acceptOwnership.call({from: accounts[1]});
		const boolrCrmG3y = await LIBERAPAYJqHIPJZ.mint.call(addressBvIDr4w, uintSlLjmp, {from: accounts[0]});
		const uint256bnMnUZZ = await LIBERAPAYJqHIPJZ.totalSupply.call({from: accounts[3]});
		const boolSf5lzUb = await LIBERAPAYJqHIPJZ.freezeAccount.call(addresskFnhp57, {from: accounts[1]});
		const boolLfrsRU8 = await LIBERAPAYJqHIPJZ.burnFrom.call(addressHk4sInn, uintrIe7gmd, {from: accounts[2]});
		const boolU1zI87R = await LIBERAPAYJqHIPJZ.decreaseAllowance.call(addresszJGVz65, uintNJzXMcN, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressCshwLn = accounts[3]
		const addressPx21Kjn = accounts[0]
		const addressPbNMPaC = accounts[1]
		const addressVRHK0Ed = accounts[1]
		const addresskiDNIWp = accounts[2]
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressPx21Kjn, addressCshwLn, {from: accounts[3]});
		const uint256IbFb73P = await LIBERAPAYbx7EAD.allowance.call(addressVRHK0Ed, addressPbNMPaC, {from: accounts[5]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addresskiDNIWp, {from: accounts[2]});

		assert.equal(uint256Az1s4OC, BigInt("0"))
		assert.equal(uint256DJ6kQeD, BigInt("0"))
		assert.equal(uint256IbFb73P, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYk4KypK = await LIBERAPAY.new({from: accounts[1]});
		const addresscIWVvya = "0x0000000000000000000000000000000000000001"
		const uintMo1FHnI = BigInt("1761")
		const addressGNIhfzI = accounts[2]
		const uint256IUW7Ai = await LIBERAPAYYk4KypK.totalSupply.call({from: accounts[0]});
		const uint256KGgjKEm = await LIBERAPAYYk4KypK.getNowTime.call({from: accounts[2]});
		await LIBERAPAYYk4KypK.whenNotPaused.call({from: accounts[5]});
		const boolESlvqbP = await LIBERAPAYYk4KypK.unfreezeAccount.call(addresscIWVvya, {from: accounts[2]});
		await LIBERAPAYYk4KypK.f.call({from: accounts[3]});
		const boolfnoJXNk = await LIBERAPAYYk4KypK.decreaseAllowance.call(addressGNIhfzI, uintMo1FHnI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IUW7Ai, BigInt("3000000000000000000000000000"))
		assert.equal(uint256KGgjKEm, BigInt("1630229756"))
		await expect(LIBERAPAYYk4KypK.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBBxX4Ik = await LIBERAPAY.new({from: accounts[1]});
		const uintAQY3OaK = BigInt("781")
		const addressliQzKHS = accounts[1]
		const addressWdQCuca = "0x0000000000000000000000000000000000000001"
		const uintGJyzVP7 = BigInt("585")
		const addressKe2QOYZ = accounts[0]
		const boolfnrvUmW = await LIBERAPAYBBxX4Ik.transferFrom.call(addressWdQCuca, addressliQzKHS, uintAQY3OaK, {from: accounts[4]});
		const boolEGEiOo5 = await LIBERAPAYBBxX4Ik.unlock.call(addressKe2QOYZ, uintGJyzVP7, {from: accounts[5]});

		await expect(LIBERAPAYBBxX4Ik.transferFrom.call(addressWdQCuca, addressliQzKHS, uintAQY3OaK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLDgCbhD = await LIBERAPAY.new({from: accounts[3]});
		const addressuX29fDf = accounts[1]
		await LIBERAPAYLDgCbhD.f.call({from: accounts[4]});
		await LIBERAPAYLDgCbhD.whenPaused.call({from: accounts[0]});
		const addressAjTjI52 = await LIBERAPAYLDgCbhD.transferOwnership.call(addressuX29fDf, {from: accounts[2]});

		await expect(LIBERAPAYLDgCbhD.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressDvbVGkl = accounts[3]
		const addressK792Owr = accounts[0]
		const uintvzoyZfX = BigInt("316")
		const addressMV1CuZt = accounts[3]
		const addressEv7NCIO = accounts[1]
		const addresslCJJGSc = accounts[1]
		const addressGiYEuMb = accounts[3]
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressK792Owr, addressDvbVGkl, {from: accounts[3]});
		const boolewoPIGQ = await LIBERAPAYbx7EAD.increaseAllowance.call(addressMV1CuZt, uintvzoyZfX, {from: accounts[3]});
		const uint256IbFb73P = await LIBERAPAYbx7EAD.allowance.call(addresslCJJGSc, addressEv7NCIO, {from: accounts[5]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressGiYEuMb, {from: accounts[2]});

		assert.equal(boolewoPIGQ, true)
		assert.equal(uint256Az1s4OC, BigInt("0"))
		assert.equal(uint256DJ6kQeD, BigInt("0"))
		assert.equal(uint256IbFb73P, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintKmcxs4i = BigInt("998")
		const addresswDJcAMJ = accounts[2]
		const uintUZWksyX = BigInt("1146")
		const addressXxqo9gv = accounts[0]
		const uintWD035nk = BigInt("1355")
		const addressAWhPjX3 = accounts[3]
		const boolCNnQZhO = await LIBERAPAY8B3Js9.approve.call(addresswDJcAMJ, uintKmcxs4i, {from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressXxqo9gv, uintUZWksyX, {from: accounts[4]});
		const boolDFD4R9S = await LIBERAPAY8B3Js9.transfer.call(addressAWhPjX3, uintWD035nk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCNnQZhO, true)
		await expect(LIBERAPAY8B3Js9.showLockState.call(addressXxqo9gv, uintUZWksyX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const uintX7sk5Fw = BigInt("426")
		const addressCgEfU5p = accounts[5]
		const addressInFJKvn = accounts[4]
		const addressUywN31R = accounts[0]
		const addressElSn4W4 = accounts[2]
		const uintKz8v6t = BigInt("27")
		const boolFsFacH1 = await LIBERAPAYbx7EAD.decreaseAllowance.call(addressCgEfU5p, uintX7sk5Fw, {from: accounts[1]});
		const uint256Az1s4OC = await LIBERAPAYbx7EAD.allowance.call(addressUywN31R, addressInFJKvn, {from: accounts[3]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressElSn4W4, {from: accounts[2]});
		const booljWkhQYL = await LIBERAPAYbx7EAD.burn.call(uintKz8v6t, {from: accounts[1]});

		await expect(LIBERAPAYbx7EAD.decreaseAllowance.call(addressCgEfU5p, uintX7sk5Fw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintisZl96E = BigInt("973")
		const addressbRHVR8r = accounts[2]
		const uintnsvZJEB = BigInt("1146")
		const addressaW0SH0T = accounts[0]
		const addressqxdGS6U = accounts[4]
		const addressLqeszAK = accounts[3]
		const addressDnKkFA = accounts[1]
		const uintiTCjIYd = BigInt("470")
		const addressVyuafT = accounts[0]
		const uintnlh8SMH = BigInt("1355")
		const addressJv0H9kW = accounts[3]
		const boolCNnQZhO = await LIBERAPAY8B3Js9.approve.call(addressbRHVR8r, uintisZl96E, {from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressaW0SH0T, uintnsvZJEB, {from: accounts[4]});
		const uint256P29HZmc = await LIBERAPAY8B3Js9.allowance.call(addressLqeszAK, addressqxdGS6U, {from: accounts[2]});
		const uint256cmIqGd7 = await LIBERAPAY8B3Js9.balanceOf.call(addressDnKkFA, {from: accounts[1]});
		const boolauua09G = await LIBERAPAY8B3Js9.burnFrom.call(addressVyuafT, uintiTCjIYd, {from: accounts[4]});
		const boolDFD4R9S = await LIBERAPAY8B3Js9.transfer.call(addressJv0H9kW, uintnlh8SMH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCNnQZhO, true)
		await expect(LIBERAPAY8B3Js9.showLockState.call(addressaW0SH0T, uintnsvZJEB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintSYD0uzv = BigInt("973")
		const addressQH7HedH = accounts[2]
		const uintMzQlc64 = BigInt("1146")
		const addressm8ZbTqP = accounts[1]
		const addressoUXo723 = accounts[1]
		const addressFOK7CO = accounts[4]
		const addressZeohDZZ = accounts[3]
		const addressA9nmPjS = accounts[1]
		const uinteZuHqHN = BigInt("470")
		const addressZTamVl6 = accounts[0]
		const uintzhrJX1B = BigInt("1355")
		const addressYXCYlaL = accounts[3]
		const boolCNnQZhO = await LIBERAPAY8B3Js9.approve.call(addressQH7HedH, uintSYD0uzv, {from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressm8ZbTqP, uintMzQlc64, {from: accounts[4]});
		const uint256ZjVDEgp = await LIBERAPAY8B3Js9.currentBalanceOf.call(addressoUXo723, {from: accounts[2]});
		const uint256P29HZmc = await LIBERAPAY8B3Js9.allowance.call(addressZeohDZZ, addressFOK7CO, {from: accounts[2]});
		const uint256cmIqGd7 = await LIBERAPAY8B3Js9.balanceOf.call(addressA9nmPjS, {from: accounts[1]});
		const boolauua09G = await LIBERAPAY8B3Js9.burnFrom.call(addressZTamVl6, uinteZuHqHN, {from: accounts[4]});
		const boolDFD4R9S = await LIBERAPAY8B3Js9.transfer.call(addressYXCYlaL, uintzhrJX1B, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCNnQZhO, true)
		await expect(LIBERAPAY8B3Js9.showLockState.call(addressm8ZbTqP, uintMzQlc64, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFLRIPHE = await LIBERAPAY.new({from: accounts[2]});
		const addressvwTl7vU = accounts[1]
		const addressyV2WkG = accounts[1]
		const uintjCDnNUJ = BigInt("245")
		const addressTqaz4L = accounts[3]
		await LIBERAPAYFLRIPHE.pause.call({from: accounts[2]});
		const uint256IHYkH7p = await LIBERAPAYFLRIPHE.currentBalanceOf.call(addressvwTl7vU, {from: accounts[5]});
		const booldPvGOaw = await LIBERAPAYFLRIPHE.unfreezeAccount.call(addressyV2WkG, {from: accounts[5]});
		const boolOncpJKC = await LIBERAPAYFLRIPHE.unlock.call(addressTqaz4L, uintjCDnNUJ, {from: accounts[0]});

		await expect(LIBERAPAYFLRIPHE.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressDPIHlfF = accounts[0]
		const addressxvJNBJD = accounts[2]
		const uintVoixEfu = BigInt("464")
		const addressbiXpxBj = accounts[2]
		const addressHNXyPdi = accounts[3]
		const addressePGn2kK = accounts[0]
		const uint256mpzpsvn = await LIBERAPAYbx7EAD.currentBalanceOf.call(addressDPIHlfF, {from: accounts[2]});
		const addressy49BRNV = await LIBERAPAYbx7EAD.upgradeTo.call(addressxvJNBJD, {from: accounts[4]});
		await LIBERAPAYbx7EAD.showLockState.call(addressbiXpxBj, uintVoixEfu, {from: accounts[3]});
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressHNXyPdi, {from: accounts[2]});
		const boolCUKtip7 = await LIBERAPAYbx7EAD.unfreezeAccount.call(addressePGn2kK, {from: accounts[2]});

		assert.equal(uint256mpzpsvn, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.showLockState.call(addressbiXpxBj, uintVoixEfu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressM7NEjhm = accounts[0]
		const addresstmJc1e = accounts[4]
		const uint256mpzpsvn = await LIBERAPAYbx7EAD.currentBalanceOf.call(addressM7NEjhm, {from: accounts[2]});
		const boolJDVsPcd = await LIBERAPAYbx7EAD.freezeAccount.call(addresstmJc1e, {from: accounts[4]});

		assert.equal(boolJDVsPcd, true)
		assert.equal(uint256mpzpsvn, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintOFN9Jx2 = BigInt("998")
		const addressGfuFNMX = accounts[2]
		const uintkNll0RA = BigInt("847")
		const addressKbVRm1d = accounts[0]
		const addressfHvCsAJ = accounts[5]
		const uintJ4vU12g = BigInt("147")
		const addresskfYidFA = accounts[0]
		const uintHBScRL = BigInt("1993")
		const uintVgr7Hoy = BigInt("1993")
		const addressohOfTri = accounts[3]
		const uintR025Rc7 = BigInt("1355")
		const addresslXy9i1 = accounts[3]
		const uints5SH165 = BigInt("38")
		const addressQ9Mknz = accounts[3]
		const addressRQdAFXa = accounts[2]
		const addressRV69mEl = accounts[2]
		const boolCNnQZhO = await LIBERAPAY8B3Js9.approve.call(addressGfuFNMX, uintOFN9Jx2, {from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressKbVRm1d, uintkNll0RA, {from: accounts[5]});
		const uint256yqXaEBa = await LIBERAPAY8B3Js9.balanceOf.call(addressfHvCsAJ, {from: accounts[5]});
		await LIBERAPAY8B3Js9.showLockState.call(addresskfYidFA, uintJ4vU12g, {from: accounts[4]});
		const boolLqwpt6p = await LIBERAPAY8B3Js9.lock.call(addressohOfTri, uintVgr7Hoy, uintHBScRL, {from: accounts[1]});
		const boolDFD4R9S = await LIBERAPAY8B3Js9.transfer.call(addresslXy9i1, uintR025Rc7, {from: "0x0000000000000000000000000000000000000001"});
		const boolOfeJMi = await LIBERAPAY8B3Js9.burnFrom.call(addressQ9Mknz, uints5SH165, {from: accounts[4]});
		await LIBERAPAY8B3Js9.f.call({from: accounts[1]});
		const uint256WbyzVdK = await LIBERAPAY8B3Js9.allowance.call(addressRV69mEl, addressRQdAFXa, {from: accounts[2]});

		assert.equal(boolCNnQZhO, true)
		await expect(LIBERAPAY8B3Js9.showLockState.call(addressKbVRm1d, uintkNll0RA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uinttCGutMv = BigInt("1140")
		const addressmde4uyC = accounts[1]
		const uintKaZhig2 = BigInt("1731")
		const addressmFARESq = "0x0000000000000000000000000000000000000001"
		await LIBERAPAY8B3Js9.showLockState.call(addressmde4uyC, uinttCGutMv, {from: accounts[4]});
		const boolc6mRkS = await LIBERAPAY8B3Js9.unlock.call(addressmFARESq, uintKaZhig2, {from: accounts[1]});

		await expect(LIBERAPAY8B3Js9.showLockState.call(addressmde4uyC, uinttCGutMv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintFEIX8K7 = BigInt("998")
		const addressVKAeunF = accounts[2]
		const uintNk8pKo7 = BigInt("847")
		const addressB9f6h5r = accounts[1]
		const addressKfx2mDW = accounts[4]
		const uintvxdvmh = BigInt("147")
		const addressKUSuc52 = accounts[0]
		const uintNCdVZqB = BigInt("516")
		const addressPdMqW8G = accounts[0]
		const uintRFvO5Ip = BigInt("1355")
		const address847SoL = accounts[3]
		const uintSOJamS = BigInt("38")
		const addressXi2J1B = accounts[3]
		const addressdYYswzo = accounts[2]
		const addressyG82VSi = accounts[2]
		const boolCNnQZhO = await LIBERAPAY8B3Js9.approve.call(addressVKAeunF, uintFEIX8K7, {from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressB9f6h5r, uintNk8pKo7, {from: accounts[5]});
		const uint256yqXaEBa = await LIBERAPAY8B3Js9.balanceOf.call(addressKfx2mDW, {from: accounts[5]});
		await LIBERAPAY8B3Js9.showLockState.call(addressKUSuc52, uintvxdvmh, {from: accounts[4]});
		const boolvaVTXzm = await LIBERAPAY8B3Js9.distribute.call(addressPdMqW8G, uintNCdVZqB, {from: accounts[1]});
		const boolDFD4R9S = await LIBERAPAY8B3Js9.transfer.call(address847SoL, uintRFvO5Ip, {from: "0x0000000000000000000000000000000000000001"});
		const boolOfeJMi = await LIBERAPAY8B3Js9.burnFrom.call(addressXi2J1B, uintSOJamS, {from: accounts[4]});
		const uint256WbyzVdK = await LIBERAPAY8B3Js9.allowance.call(addressyG82VSi, addressdYYswzo, {from: accounts[2]});

		assert.equal(boolCNnQZhO, true)
		await expect(LIBERAPAY8B3Js9.showLockState.call(addressB9f6h5r, uintNk8pKo7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const addressX2Adlgs = "0x0000000000000000000000000000000000000001"
		const uintGtWrq6B = BigInt("626")
		const addressyEZpmb6 = accounts[0]
		const uintqIsobk2 = BigInt("1169")
		const addressFrPxhIv = accounts[1]
		const addressDO0n08g = await LIBERAPAY8B3Js9.transferOwnership.call(addressX2Adlgs, {from: accounts[1]});
		const boolibfZlyD = await LIBERAPAY8B3Js9.increaseAllowance.call(addressyEZpmb6, uintGtWrq6B, {from: accounts[1]});
		await LIBERAPAY8B3Js9.f.call({from: accounts[0]});
		await LIBERAPAY8B3Js9.showLockState.call(addressFrPxhIv, uintqIsobk2, {from: accounts[4]});

		assert.equal(boolibfZlyD, true)
		await expect(LIBERAPAY8B3Js9.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY8B3Js9 = await LIBERAPAY.new({from: accounts[1]});
		const uintcTsRDk8 = BigInt("1287")
		const uintVJVLNi4 = BigInt("791")
		const addressTgiILF9 = "0x0000000000000000000000000000000000000000"
		const uintqAAFt0w = BigInt("1656")
		const addressEjhazbt = accounts[2]
		const uint4C7XD0 = BigInt("370")
		const addressg1NqBzk = accounts[1]
		const boolAG455oa = await LIBERAPAY8B3Js9.burn.call(uintcTsRDk8, {from: accounts[1]});
		const boolc6mRkS = await LIBERAPAY8B3Js9.unlock.call(addressTgiILF9, uintVJVLNi4, {from: accounts[1]});
		const boolc3pA9Wu = await LIBERAPAY8B3Js9.increaseAllowance.call(addressEjhazbt, uintqAAFt0w, {from: accounts[3]});
		const uint256PNMuhz = await LIBERAPAY8B3Js9.totalSupply.call({from: accounts[2]});
		const boolDuqy3Hp = await LIBERAPAY8B3Js9.decreaseAllowance.call(addressg1NqBzk, uint4C7XD0, {from: accounts[2]});

		assert.equal(boolAG455oa, true)
		await expect(LIBERAPAY8B3Js9.unlock.call(addressTgiILF9, uintVJVLNi4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYM49vdbB = await LIBERAPAY.new({from: accounts[3]});
		const addressQ1SdNG0 = accounts[1]
		const uintLKCvBWU = BigInt("1000")
		const addressJUuhWZ5 = accounts[2]
		const addressG1vS5J = accounts[4]
		const uintTrzMyCR = BigInt("455")
		const addresszfgbKx = accounts[1]
		const addressBi8bkw0 = accounts[4]
		const boolEq8DI1c = await LIBERAPAYM49vdbB.unfreezeAccount.call(addressQ1SdNG0, {from: accounts[3]});
		await LIBERAPAYM49vdbB.showLockState.call(addressJUuhWZ5, uintLKCvBWU, {from: accounts[3]});
		const addressDgELgw = await LIBERAPAYM49vdbB.transferOwnership.call(addressG1vS5J, {from: accounts[3]});
		const boolXDOjH9 = await LIBERAPAYM49vdbB.transferFrom.call(addressBi8bkw0, addresszfgbKx, uintTrzMyCR, {from: accounts[5]});
		await LIBERAPAYM49vdbB.whenPaused.call({from: accounts[2]});

		await expect(LIBERAPAYM49vdbB.unfreezeAccount.call(addressQ1SdNG0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbx7EAD = await LIBERAPAY.new({from: accounts[4]});
		const addressqyOolt9 = accounts[2]
		const uintMqL0Rxs = BigInt("128")
		const addressB73eN9j = accounts[4]
		const uintttQMnUK = BigInt("606")
		const addresspywjUYF = accounts[0]
		const uint256DJ6kQeD = await LIBERAPAYbx7EAD.balanceOf.call(addressqyOolt9, {from: accounts[2]});
		const bool8xxgi5 = await LIBERAPAYbx7EAD.mint.call(addressB73eN9j, uintMqL0Rxs, {from: accounts[4]});
		const boolWK1Ln1 = await LIBERAPAYbx7EAD.burnFrom.call(addresspywjUYF, uintttQMnUK, {from: accounts[1]});

		assert.equal(uint256DJ6kQeD, BigInt("0"))
		await expect(LIBERAPAYbx7EAD.mint.call(addressB73eN9j, uintMqL0Rxs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})