const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20svr4Kyf = await GAZ_ERC20.new({from: accounts[3]});
		const uintRq67qpY = BigInt("975")
		const addressippaAL = accounts[1]
		const uintYLxhzae = BigInt("1329")
		const addressdmWgWVz = accounts[3]
		const uintefqFvKQ = BigInt("1929")
		const addressa4U2XFS = accounts[5]
		const boolsCHdvP = await GAZ_ERC20svr4Kyf.approve.call(addressippaAL, uintRq67qpY, {from: accounts[3]});
//		const boolrAANgET = await GAZ_ERC20svr4Kyf.transfer.call(addressdmWgWVz, uintYLxhzae, {from: accounts[5]});
//		const boolqIrjZlH = await GAZ_ERC20svr4Kyf.approve.call(addressa4U2XFS, uintefqFvKQ, {from: accounts[4]});

		assert.equal(boolsCHdvP, true)
		await expect(GAZ_ERC20svr4Kyf.transfer.call(addressdmWgWVz, uintYLxhzae, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YJOh0iM = await GAZ_ERC20.new({from: accounts[3]});
		const uintSEE1QNY = BigInt("1462")
		const addressP242ona = accounts[1]
		const uintC4JxTdS = BigInt("862")
		const addresswI6yRAC = accounts[0]
		const uintwKNZHJ = BigInt("326")
		const addressleV2lQm = accounts[4]
		const boold3pkUJ9 = await GAZ_ERC20YJOh0iM.transfer.call(addressP242ona, uintSEE1QNY, {from: accounts[3]});
		const boolPkdF0pb = await GAZ_ERC20YJOh0iM.approve.call(addresswI6yRAC, uintC4JxTdS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolt9y0G9J = await GAZ_ERC20YJOh0iM.transfer.call(addressleV2lQm, uintwKNZHJ, {from: accounts[0]});

		assert.equal(boolPkdF0pb, true)
		assert.equal(boold3pkUJ9, true)
		await expect(GAZ_ERC20YJOh0iM.transfer.call(addressleV2lQm, uintwKNZHJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20d5GPUy0 = await GAZ_ERC20.new({from: accounts[4]});
		const addressC0Zalgl = accounts[2]
		const uintfuDLGlt = BigInt("1240")
		const addresspJbjoRI = accounts[0]
		const addressu4MSeA9 = accounts[0]
		const addressMwv9MG = accounts[1]
//		const boolV725gu = await GAZ_ERC20d5GPUy0.approve.call(addressC0Zalgl, {from: accounts[3]});
//		const boolA8S30uX = await GAZ_ERC20d5GPUy0.transfer.call(addresspJbjoRI, uintfuDLGlt, {from: accounts[3]});
//		const boolSZAwPsc = await GAZ_ERC20d5GPUy0.approve.call(addressu4MSeA9, {from: accounts[0]});
//		const boolLrvuEvc = await GAZ_ERC20d5GPUy0.approve.call(addressMwv9MG, {from: accounts[2]});

		await expect(GAZ_ERC20d5GPUy0.approve.call(addressC0Zalgl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20d2LcrYs = await GAZ_ERC20.new({from: accounts[3]});
		const addresspfXLWta = accounts[4]
		const uintgKmHyCm = BigInt("1549")
		const addresseOjyrQN = accounts[0]
		const addressHdkbgp = accounts[0]
		const uintho84SDY = BigInt("1939")
		const addressw6sF3Rj = accounts[5]
		const addressLof1FKM = accounts[5]
		const uintLgxSgRr = BigInt("1775")
		const addressrkbfIpf = accounts[5]
//		const boold07NrtA = await GAZ_ERC20d2LcrYs.approve.call(addresspfXLWta, {from: accounts[1]});
//		const booldb4DYOv = await GAZ_ERC20d2LcrYs.transfer.call(addresseOjyrQN, uintgKmHyCm, {from: accounts[3]});
//		const boolYTnEUhe = await GAZ_ERC20d2LcrYs.approve.call(addressHdkbgp, {from: accounts[1]});
//		const boolEgjQIB = await GAZ_ERC20d2LcrYs.transferFrom.call(addressLof1FKM, addressw6sF3Rj, uintho84SDY, {from: accounts[4]});
//		const boolRmbnx24 = await GAZ_ERC20d2LcrYs.approve.call(addressrkbfIpf, uintLgxSgRr, {from: accounts[5]});

		await expect(GAZ_ERC20d2LcrYs.approve.call(addresspfXLWta, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20H2K0vXT = await GAZ_ERC20.new({from: accounts[2]});
		const uintRlTgr9F = BigInt("191")
		const addresslq1kVix = accounts[1]
		const addressqdzbmPH = accounts[5]
		const uintxeYMJz8 = BigInt("2025")
		const addressiPLfyd0 = accounts[2]
		const addressOC4EzjD = accounts[4]
		const uintUdzQEZX = BigInt("745")
		const address2XG75D = accounts[4]
		const boolK4QsYVy = await GAZ_ERC20H2K0vXT.approve.call(addresslq1kVix, uintRlTgr9F, {from: accounts[4]});
//		const boolNBLXFcv = await GAZ_ERC20H2K0vXT.approve.call(addressqdzbmPH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgYgFJR0 = await GAZ_ERC20H2K0vXT.transferFrom.call(addressOC4EzjD, addressiPLfyd0, uintxeYMJz8, {from: accounts[0]});
//		const boolAxERSM8 = await GAZ_ERC20H2K0vXT.approve.call(address2XG75D, uintUdzQEZX, {from: accounts[3]});

		assert.equal(boolK4QsYVy, true)
		await expect(GAZ_ERC20H2K0vXT.approve.call(addressqdzbmPH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LTWW0FG = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD7ctWHD = BigInt("591")
		const addressACT7Wgs = "0x0000000000000000000000000000000000000001"
		const uintPXd4AFX = BigInt("567")
		const addressNRRC8E5 = accounts[1]
		const booldJhKq7P = await GAZ_ERC20LTWW0FG.transfer.call(addressACT7Wgs, uintD7ctWHD, {from: accounts[3]});
		const booltEPWpcb = await GAZ_ERC20LTWW0FG.transfer.call(addressNRRC8E5, uintPXd4AFX, {from: accounts[5]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20wc7LPO4 = await GAZ_ERC20.new({from: accounts[2]});
		const uintuqBGqxq = BigInt("330")
		const addressArx9a5V = accounts[3]
		const addressayOKplr = "0x0000000000000000000000000000000000000001"
		const uintdenV8SD = BigInt("1121")
		const addressPYKvohX = accounts[1]
		const uintFuGsnWg = BigInt("24")
		const addressFmXCRJJ = accounts[1]
		const uintxZhPPD8 = BigInt("1487")
		const addressqgvkfAN = accounts[2]
		const uintsQVtFI = BigInt("585")
		const addressTyfiaLn = accounts[0]
		const uintZYegxe7 = BigInt("649")
		const addressgby6zQb = accounts[2]
		const addressT4UEWOj = accounts[2]
		const uintXcyncme = BigInt("848")
		const addressxqO7V6 = accounts[1]
//		const boolXSnYuov = await GAZ_ERC20wc7LPO4.transferFrom.call(addressayOKplr, addressArx9a5V, uintuqBGqxq, {from: accounts[4]});
//		const boolWDKVLYr = await GAZ_ERC20wc7LPO4.transfer.call(addressPYKvohX, uintdenV8SD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK4jY6JI = await GAZ_ERC20wc7LPO4.approve.call(addressFmXCRJJ, uintFuGsnWg, {from: accounts[4]});
//		const boolt6Zohnd = await GAZ_ERC20wc7LPO4.transfer.call(addressqgvkfAN, uintxZhPPD8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbkDRwhD = await GAZ_ERC20wc7LPO4.transfer.call(addressTyfiaLn, uintsQVtFI, {from: accounts[3]});
//		const boolOXZvKUd = await GAZ_ERC20wc7LPO4.transferFrom.call(addressT4UEWOj, addressgby6zQb, uintZYegxe7, {from: accounts[5]});
//		const boolGFuUhph = await GAZ_ERC20wc7LPO4.transfer.call(addressxqO7V6, uintXcyncme, {from: accounts[0]});

		await expect(GAZ_ERC20wc7LPO4.transferFrom.call(addressayOKplr, addressArx9a5V, uintuqBGqxq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DpzRX8t = await GAZ_ERC20.new({from: accounts[0]});
		const addressmARlAs = accounts[2]
		const uintf7mUBGu = BigInt("1664")
		const addresssZU1vuw = accounts[0]
		const uintt2gAuYn = BigInt("992")
		const addresspHOfaHI = "0x0000000000000000000000000000000000000001"
		const uintZ1gi9EG = BigInt("1995")
		const addressqEmhvJu = accounts[4]
		const uintW1cwz0f = BigInt("1332")
		const addressCU57hk = accounts[0]
//		const boolNJxD3mV = await GAZ_ERC20DpzRX8t.approve.call(addressmARlAs, {from: accounts[2]});
//		const boolcdMCD35 = await GAZ_ERC20DpzRX8t.transfer.call(addresssZU1vuw, uintf7mUBGu, {from: accounts[4]});
//		const booliUrvvT7 = await GAZ_ERC20DpzRX8t.approve.call(addresspHOfaHI, uintt2gAuYn, {from: accounts[0]});
//		const boolbIv29QU = await GAZ_ERC20DpzRX8t.approve.call(addressqEmhvJu, uintZ1gi9EG, {from: accounts[4]});
//		const boolnwAbCPR = await GAZ_ERC20DpzRX8t.approve.call(addressCU57hk, uintW1cwz0f, {from: accounts[2]});

		await expect(GAZ_ERC20DpzRX8t.approve.call(addressmARlAs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20s0ie13C = await GAZ_ERC20.new({from: accounts[1]});
		const addressm79ZzV4 = accounts[0]
		const uinthc36aa = BigInt("1635")
		const addressWYgj8za = accounts[0]
		const addressZ34jUm = accounts[2]
		const uintvqvw2I4 = BigInt("1")
		const addressctYkwue = accounts[4]
		const addresslZaXXU = accounts[1]
//		const booljYCaNJn = await GAZ_ERC20s0ie13C.approve.call(addressm79ZzV4, {from: accounts[0]});
//		const bool25qpnX = await GAZ_ERC20s0ie13C.transferFrom.call(addressZ34jUm, addressWYgj8za, uinthc36aa, {from: accounts[3]});
//		const boolEjaId6m = await GAZ_ERC20s0ie13C.transfer.call(addressctYkwue, uintvqvw2I4, {from: accounts[3]});
//		const booleQg2XBN = await GAZ_ERC20s0ie13C.approve.call(addresslZaXXU, {from: accounts[2]});

		await expect(GAZ_ERC20s0ie13C.approve.call(addressm79ZzV4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20jp3NbB = await GAZ_ERC20.new({from: accounts[3]});
		const addressBJuYVI = accounts[2]
		const uintSSyfdIo = BigInt("724")
		const addressyOAdfAI = accounts[2]
//		const boolslmz2bo = await GAZ_ERC20jp3NbB.approve.call(addressBJuYVI, {from: accounts[4]});
//		const boolKRJMoTS = await GAZ_ERC20jp3NbB.approve.call(addressyOAdfAI, uintSSyfdIo, {from: accounts[4]});

		await expect(GAZ_ERC20jp3NbB.approve.call(addressBJuYVI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20UlFBnl3 = await GAZ_ERC20.new({from: accounts[0]});
		const addressJPzvi57 = accounts[3]
		const uintuKb6mfF = BigInt("1760")
		const addressYpZmtEt = accounts[3]
		const uintQdtYXfw = BigInt("1763")
		const addressnhooA9 = accounts[3]
		const uintgTKtuem = BigInt("1898")
		const addressuMk6Y8 = accounts[3]
		const addressK0miWM = accounts[0]
		const uintUBeyvAP = BigInt("1755")
		const addressCNsfibT = accounts[4]
		const uintykk7GxV = BigInt("1020")
		const address0pW0q2 = "0x0000000000000000000000000000000000000001"
//		const boolbngjh2Z = await GAZ_ERC20UlFBnl3.approve.call(addressJPzvi57, {from: accounts[5]});
//		const boolYozti1 = await GAZ_ERC20UlFBnl3.transfer.call(addressYpZmtEt, uintuKb6mfF, {from: accounts[4]});
//		const boolwSF9qE0 = await GAZ_ERC20UlFBnl3.approve.call(addressnhooA9, uintQdtYXfw, {from: accounts[2]});
//		const boolY8MnPs = await GAZ_ERC20UlFBnl3.transferFrom.call(addressK0miWM, addressuMk6Y8, uintgTKtuem, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwxqilfb = await GAZ_ERC20UlFBnl3.transfer.call(addressCNsfibT, uintUBeyvAP, {from: accounts[2]});
//		const boolFCxjA8A = await GAZ_ERC20UlFBnl3.transfer.call(address0pW0q2, uintykk7GxV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20UlFBnl3.approve.call(addressJPzvi57, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})