const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressA3Ym5JG = accounts[2]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressA3Ym5JG, {from: accounts[2]});

		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		assert.equal(uint256jPtpcrb, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYDavhnlg = await KPLAY.new({from: accounts[0]});
		const addressVmY1zLg = accounts[0]
		const uintWqIVmwU = BigInt("1543")
		const addressZSLS4Ym = accounts[3]
		const uintM7HBJE7 = BigInt("849")
		const addressznNf8C = await KPLAYDavhnlg.freeze.call(addressVmY1zLg, {from: accounts[3]});
		const addressWkbh4SM = await KPLAYDavhnlg.burn.call(addressZSLS4Ym, uintWqIVmwU, {from: accounts[3]});
		const uint256JFBTZsd = await KPLAYDavhnlg.afterTime.call(uintM7HBJE7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYDavhnlg.freeze.call(addressVmY1zLg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYL54SOI = await KPLAY.new({from: accounts[1]});
		const addressl4Iss0N = accounts[2]
		const uintULJmHl = BigInt("932")
		const addressgQ6jsCE = accounts[0]
		const addressw8Eh6jH = accounts[3]
		const uint256WVKHwI = await KPLAYL54SOI.balanceOf.call(addressl4Iss0N, {from: accounts[0]});
		await KPLAYL54SOI.whenNotFrozen.call({from: accounts[2]});
		const boolwXODkVA = await KPLAYL54SOI.transferFrom.call(addressw8Eh6jH, addressgQ6jsCE, uintULJmHl, {from: accounts[3]});

		assert.equal(uint256WVKHwI, BigInt("0"))
		await expect(KPLAYL54SOI.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqGZB0Hp = await KPLAY.new({from: accounts[3]});
		const addressYrnLAB5 = accounts[2]
		const addresslrE1pU1 = accounts[4]
		const addressuYda2nU = accounts[0]
		const uintpwIldMN = BigInt("412")
		const addresscuIy2uZ = accounts[0]
		const uint256FB0oI4Y = await KPLAYqGZB0Hp.allowance.call(addresslrE1pU1, addressYrnLAB5, {from: accounts[0]});
		const addressAXLFGEk = await KPLAYqGZB0Hp.freeze.call(addressuYda2nU, {from: accounts[4]});
		await KPLAYqGZB0Hp.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const boolix0bhV = await KPLAYqGZB0Hp.approve.call(addresscuIy2uZ, uintpwIldMN, {from: accounts[0]});
		const uint256elQhSbn = await KPLAYqGZB0Hp.totalSupply.call({from: accounts[4]});

		assert.equal(uint256FB0oI4Y, BigInt("0"))
		await expect(KPLAYqGZB0Hp.freeze.call(addressuYda2nU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEsDZBT = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintG5LxSPi = BigInt("824")
		const addressLeLt1jE = accounts[1]
		const addressDlTQxoJ = accounts[3]
		const addresspLi6nkx = accounts[3]
		const uintnVnFGp4 = BigInt("186")
		const addressCyQ18Za = accounts[2]
		const boolckD24Du = await KPLAYEsDZBT.mint.call(addressLeLt1jE, uintG5LxSPi, {from: accounts[2]});
		const uint256vXEQx31 = await KPLAYEsDZBT.balanceOf.call(addressDlTQxoJ, {from: accounts[3]});
		const uint256NXbIfAy = await KPLAYEsDZBT.balanceOf.call(addresspLi6nkx, {from: accounts[4]});
		const boolU7nuTla = await KPLAYEsDZBT.decreaseAllowance.call(addressCyQ18Za, uintnVnFGp4, {from: accounts[1]});
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintUeKHlu7 = BigInt("405")
		const addresspZsDKbS = accounts[1]
		const addresshR6gCSM = accounts[2]
		const boolnhgm9Ua = await KPLAYwRyaE1.increaseAllowance.call(addresspZsDKbS, uintUeKHlu7, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYwRyaE1.whenNotFrozen.call({from: accounts[3]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addresshR6gCSM, {from: accounts[2]});

		assert.equal(boolnhgm9Ua, true)
		await expect(KPLAYwRyaE1.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintj8WC00u = BigInt("1660")
		const addressKYHUR5x = accounts[1]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const boolUZZDXi7 = await KPLAYwRyaE1.transfer.call(addressKYHUR5x, uintj8WC00u, {from: accounts[5]});

		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.transfer.call(addressKYHUR5x, uintj8WC00u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXvzJZXU = await KPLAY.new({from: accounts[3]});
		const uintFt2u3j6 = BigInt("141")
		const addresssXcMJhL = accounts[1]
		const uintgHXTuZo = BigInt("854")
		const uintJZEfZqB = BigInt("1076")
		const addressC2jTOaq = accounts[3]
		const uintHifimgE = BigInt("1161")
		const addressv4VDQb = accounts[3]
		const addressyes2gy = accounts[4]
		const uintK9WjkVE = BigInt("1123")
		const uintwVSkjdi = BigInt("1409")
		const addressmXw2S9r = accounts[3]
		const booliaCDszI = await KPLAYXvzJZXU.increaseAllowance.call(addresssXcMJhL, uintFt2u3j6, {from: accounts[0]});
		const addressQnBGrWP = await KPLAYXvzJZXU.lock.call(addressC2jTOaq, uintJZEfZqB, uintgHXTuZo, {from: accounts[3]});
		const boolYPrV6iX = await KPLAYXvzJZXU.transferFrom.call(addressyes2gy, addressv4VDQb, uintHifimgE, {from: accounts[3]});
		const addressx5c10y6 = await KPLAYXvzJZXU.lock.call(addressmXw2S9r, uintwVSkjdi, uintK9WjkVE, {from: accounts[3]});

		assert.equal(booliaCDszI, true)
		await expect(KPLAYXvzJZXU.transferFrom.call(addressyes2gy, addressv4VDQb, uintHifimgE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintDZzXCeL = BigInt("1228")
		const addressTHHD2w6 = accounts[4]
		const uintxfql7GS = BigInt("1660")
		const addressheQidGs = accounts[1]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const boolHUHsNdL = await KPLAYwRyaE1.decreaseAllowance.call(addressTHHD2w6, uintDZzXCeL, {from: accounts[2]});
		const boolUZZDXi7 = await KPLAYwRyaE1.transfer.call(addressheQidGs, uintxfql7GS, {from: accounts[5]});

		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.decreaseAllowance.call(addressTHHD2w6, uintDZzXCeL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintvwQeMWn = BigInt("1551")
		const uintdJzaJVv = BigInt("735")
		const addressobQbLw5 = accounts[3]
		const uintfIDPe2K = BigInt("1660")
		const addressErcyels = accounts[2]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const boolABTAk2 = await KPLAYwRyaE1.transferWithLock.call(addressobQbLw5, uintdJzaJVv, uintvwQeMWn, {from: accounts[0]});
		const boolUZZDXi7 = await KPLAYwRyaE1.transfer.call(addressErcyels, uintfIDPe2K, {from: accounts[5]});

		assert.equal(boolABTAk2, true)
		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.transfer.call(addressErcyels, uintfIDPe2K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintg4Ten0n = BigInt("1800")
		const addressu74faIA = accounts[4]
		const uintTs1lHn = BigInt("1660")
		const addressYwREfVx = accounts[2]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const boolUdMxYBU = await KPLAYwRyaE1.approve.call(addressu74faIA, uintg4Ten0n, {from: accounts[4]});
		const boolUZZDXi7 = await KPLAYwRyaE1.transfer.call(addressYwREfVx, uintTs1lHn, {from: accounts[5]});

		assert.equal(boolUdMxYBU, true)
		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.transfer.call(addressYwREfVx, uintTs1lHn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressz8C6NdN = accounts[2]
		const address3C4Ldm = accounts[3]
		await KPLAYwRyaE1.renounceOwnership.call({from: accounts[0]});
		const address7685R4 = await KPLAYwRyaE1.transferOwnership.call(addressz8C6NdN, {from: accounts[4]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(address3C4Ldm, {from: accounts[2]});

		await expect(KPLAYwRyaE1.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintOUPl1y9 = BigInt("961")
		const addressmt1LJC = accounts[5]
		const uintDrYcDY2 = BigInt("530")
		const address96TRhL = accounts[2]
		await KPLAYwRyaE1.lockState.call(addressmt1LJC, uintOUPl1y9, {from: accounts[5]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const boolPgfihKy = await KPLAYwRyaE1.mint.call(address96TRhL, uintDrYcDY2, {from: accounts[4]});

		await expect(KPLAYwRyaE1.lockState.call(addressmt1LJC, uintOUPl1y9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressaZR7HCt = accounts[0]
		const addressuly2V58 = accounts[3]
		const boolgxDHc20 = await KPLAYwRyaE1.isFrozen.call(addressaZR7HCt, {from: accounts[3]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressuly2V58, {from: accounts[2]});

		assert.equal(boolgxDHc20, false)
		assert.equal(uint256jPtpcrb, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintdXrAtCz = BigInt("708")
		const uintAu1bvaT = BigInt("1691")
		const uintq941d59 = BigInt("1803")
		const addressGKP8MU = accounts[3]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const uint256PyEis0g = await KPLAYwRyaE1.afterTime.call(uintdXrAtCz, {from: accounts[0]});
		const boolhjLV8nO = await KPLAYwRyaE1.transferWithLock.call(addressGKP8MU, uintq941d59, uintAu1bvaT, {from: accounts[3]});
		await KPLAYwRyaE1.whenNotPaused.call({from: accounts[0]});

		assert.equal(uint256PyEis0g, BigInt("1630228935"))
		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.transferWithLock.call(addressGKP8MU, uintq941d59, uintAu1bvaT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressvkRlhmA = accounts[3]
		const uinttVN9Zhm = BigInt("1283")
		const uintGcaXICZ = BigInt("1896")
		const addressbLmA4qL = accounts[3]
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressvkRlhmA, {from: accounts[2]});
		const addressF6AkNrr = await KPLAYwRyaE1.lock.call(addressbLmA4qL, uintGcaXICZ, uinttVN9Zhm, {from: accounts[0]});

		assert.equal(uint256jPtpcrb, BigInt("0"))
		await expect(KPLAYwRyaE1.lock.call(addressbLmA4qL, uintGcaXICZ, uinttVN9Zhm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintQzCvsRN = BigInt("523")
		const addressNlP6nPT = accounts[3]
		const uintLKfrGho = BigInt("926")
		const addressGT4wddF = accounts[1]
		const addresskaMt24Z = accounts[3]
		const addressCoSK25M = await KPLAYwRyaE1.unlock.call(addressNlP6nPT, uintQzCvsRN, {from: accounts[0]});
		const booljrIPChB = await KPLAYwRyaE1.approve.call(addressGT4wddF, uintLKfrGho, {from: accounts[4]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addresskaMt24Z, {from: accounts[2]});

		await expect(KPLAYwRyaE1.unlock.call(addressNlP6nPT, uintQzCvsRN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintHkWGD0C = BigInt("1092")
		const addressHkkd56V = accounts[2]
		const boolcDo5g9D = await KPLAYwRyaE1.mint.call(addressHkkd56V, uintHkWGD0C, {from: accounts[0]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});

		assert.equal(boolcDo5g9D, true)
		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYZ0HgeK9 = await KPLAY.new({from: accounts[2]});
		const addressjPK2MH = accounts[1]
		const addressUVDH9x = "0x0000000000000000000000000000000000000001"
		const uintPk3h9WX = BigInt("1381")
		const addressbh6bkV8 = accounts[0]
		const uintPi6Wx9K = BigInt("1746")
		const uintDNrviMf = BigInt("1486")
		const addresshLDs7pX = accounts[2]
		const uintu2YVs3Q = BigInt("882")
		const address8kzEJ6 = accounts[5]
		const uint256k83ZabG = await KPLAYZ0HgeK9.lockCount.call(addressjPK2MH, {from: accounts[0]});
		const uint256fOZtUl8 = await KPLAYZ0HgeK9.balanceOf.call(addressUVDH9x, {from: accounts[5]});
		const boolrMN24I1 = await KPLAYZ0HgeK9.approve.call(addressbh6bkV8, uintPk3h9WX, {from: accounts[0]});
		const boolgVrlnal = await KPLAYZ0HgeK9.transferWithLock.call(addresshLDs7pX, uintDNrviMf, uintPi6Wx9K, {from: accounts[4]});
		const addressR6C640h = await KPLAYZ0HgeK9.unlock.call(address8kzEJ6, uintu2YVs3Q, {from: accounts[4]});

		assert.equal(boolrMN24I1, true)
		assert.equal(uint256fOZtUl8, BigInt("0"))
		assert.equal(uint256k83ZabG, BigInt("0"))
		await expect(KPLAYZ0HgeK9.transferWithLock.call(addresshLDs7pX, uintDNrviMf, uintPi6Wx9K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const uint256Zh449LJ = await KPLAYwRyaE1.currentTime.call({from: accounts[0]});

		assert.equal(uint256Zh449LJ, BigInt("1630228226"))
		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressLSEPBn = accounts[2]
		const addresslkUmbW = accounts[3]
		const addressnD7S9xk = await KPLAYwRyaE1.transferOwnership.call(addressLSEPBn, {from: accounts[0]});
		await KPLAYwRyaE1.unpause.call({from: accounts[5]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addresslkUmbW, {from: accounts[2]});

		await expect(KPLAYwRyaE1.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressFRwrMck = accounts[4]
		const addressycE9Ao5 = await KPLAYwRyaE1.unfreeze.call(addressFRwrMck, {from: accounts[0]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});

		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressbadqrNZ = accounts[3]
		await KPLAYwRyaE1.unpause.call({from: accounts[0]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressbadqrNZ, {from: accounts[2]});

		await expect(KPLAYwRyaE1.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintcVktcVW = BigInt("1883")
		const addressQh650ck = accounts[1]
		const addressswVjBmT = await KPLAYwRyaE1.burn.call(addressQh650ck, uintcVktcVW, {from: accounts[0]});
		await KPLAYwRyaE1.pause.call({from: accounts[5]});
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});

		await expect(KPLAYwRyaE1.burn.call(addressQh650ck, uintcVktcVW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressyGI8l7 = accounts[5]
		const addressRHZPGEZ = accounts[3]
		const uintRjDY4an = BigInt("59")
		const uintEiHpRI3 = BigInt("1842")
		const addressbd8MjfA = accounts[5]
		const addressFF15cUw = await KPLAYwRyaE1.freeze.call(addressyGI8l7, {from: accounts[0]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressRHZPGEZ, {from: accounts[2]});
		const boolfQMqDe4 = await KPLAYwRyaE1.transferWithLock.call(addressbd8MjfA, uintEiHpRI3, uintRjDY4an, {from: accounts[5]});

		assert.equal(uint256jPtpcrb, BigInt("0"))
		await expect(KPLAYwRyaE1.transferWithLock.call(addressbd8MjfA, uintEiHpRI3, uintRjDY4an, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const addressuXbu2hU = accounts[3]
		await KPLAYwRyaE1.pause.call({from: accounts[0]});
		const uint256jPtpcrb = await KPLAYwRyaE1.balanceOf.call(addressuXbu2hU, {from: accounts[2]});
		await KPLAYwRyaE1.onlyOwner.call({from: accounts[0]});
		await KPLAYwRyaE1.onlyOwner.call({from: accounts[3]});

		await expect(KPLAYwRyaE1.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintxRgjqmA = BigInt("1287")
		const uintA1s8Rlf = BigInt("574")
		const addressWIFZkdl = accounts[1]
		const uintUER0rCB = BigInt("1641")
		const addressZW38bQA = accounts[2]
		const boolzPwMHW1 = await KPLAYwRyaE1.transferWithLockAfter.call(addressWIFZkdl, uintA1s8Rlf, uintxRgjqmA, {from: accounts[0]});
		const boolUZZDXi7 = await KPLAYwRyaE1.transfer.call(addressZW38bQA, uintUER0rCB, {from: accounts[5]});

		assert.equal(boolzPwMHW1, true)
		await expect(KPLAYwRyaE1.transfer.call(addressZW38bQA, uintUER0rCB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRyaE1 = await KPLAY.new({from: accounts[0]});
		const uintIAbIkt3 = BigInt("575")
		const uintcPDEUQ = BigInt("518")
		const addressCtbTH8t = accounts[0]
		const uintNFv6EbY = BigInt("1238")
		const addressRujnM1G = accounts[5]
		const addressAVjrlHM = accounts[3]
		const uint256aT19S0E = await KPLAYwRyaE1.totalSupply.call({from: accounts[1]});
		const addresssXnSbYl = await KPLAYwRyaE1.lockAfter.call(addressCtbTH8t, uintcPDEUQ, uintIAbIkt3, {from: accounts[0]});
		const bool1PXLQ0 = await KPLAYwRyaE1.transfer.call(addressRujnM1G, uintNFv6EbY, {from: accounts[1]});
		const addresscMgy6x = await KPLAYwRyaE1.transferOwnership.call(addressAVjrlHM, {from: accounts[3]});

		assert.equal(uint256aT19S0E, BigInt("10000000000000000"))
		await expect(KPLAYwRyaE1.transfer.call(addressRujnM1G, uintNFv6EbY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})