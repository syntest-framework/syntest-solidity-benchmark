const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20xjiMPJa = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintgF9lPhX = BigInt("1994")
		const uintu2oOLf = BigInt("457")
		const uintdbzTLvo = BigInt("1570")
		const uintX8voqTB = BigInt("246")
		const addressSu1YNTE = "0x0000000000000000000000000000000000000001"
		const addressfdHGiQ = accounts[1]
		const uint256DC0KQ5A = await UNIWHALE_ERC20xjiMPJa.startAirdrop.call(uintX8voqTB, uintdbzTLvo, uintu2oOLf, uintgF9lPhX, {from: accounts[2]});
		const uint256ei6Uskk = await UNIWHALE_ERC20xjiMPJa.viewSale.call({from: accounts[3]});
		const uint256mxsfnEw = await UNIWHALE_ERC20xjiMPJa.viewAirdrop.call({from: accounts[4]});
		const uint256hYgxmyF = await UNIWHALE_ERC20xjiMPJa.viewAirdrop.call({from: accounts[1]});
		const boolYGXce9m = await UNIWHALE_ERC20xjiMPJa.getAirdrop.call(addressSu1YNTE, {from: accounts[2]});
		const booli5fOlUm = await UNIWHALE_ERC20xjiMPJa.tokenSale.call(addressfdHGiQ, {from: accounts[4]});

		await expect(UNIWHALE_ERC20xjiMPJa.getAirdrop.call(addressSu1YNTE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20mteO9nc = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUYrz3W6 = BigInt("872")
		const uintI9DVgou = BigInt("240")
		const uintu8N6H1F = BigInt("639")
		const uintez2kbRa = BigInt("1020")
		const addressyC0gKzz = accounts[1]
		const uint256QyCExen = await UNIWHALE_ERC20mteO9nc.startAirdrop.call(uintez2kbRa, uintu8N6H1F, uintI9DVgou, uintUYrz3W6, {from: accounts[5]});
		const uint256Jveh0R5 = await UNIWHALE_ERC20mteO9nc.viewAirdrop.call({from: accounts[5]});
		const uint256zEYKQyQ = await UNIWHALE_ERC20mteO9nc.viewAirdrop.call({from: accounts[1]});
		const uint256DcKDch = await UNIWHALE_ERC20mteO9nc.viewAirdrop.call({from: accounts[4]});
		const boolAZCbsac = await UNIWHALE_ERC20mteO9nc.getAirdrop.call(addressyC0gKzz, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20xPkUkD7 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressodvof9R = accounts[3]
		const boolFguTbx = await UNIWHALE_ERC20xPkUkD7.tokenSale.call(addressodvof9R, {from: accounts[2]});
		const uint256p250N4E = await UNIWHALE_ERC20xPkUkD7.viewSale.call({from: accounts[5]});
		const uint256B8SMojH = await UNIWHALE_ERC20xPkUkD7.viewAirdrop.call({from: accounts[4]});
		const uint256KscLQLN = await UNIWHALE_ERC20xPkUkD7.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20xPkUkD7.tokenSale.call(addressodvof9R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20MVXTL3c = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintc6EL5eD = BigInt("861")
		const uintUJpuqCN = BigInt("816")
		const uintrQT77cI = BigInt("62")
		const uintIGzHr97 = BigInt("1886")
		const uintRZwQIO = BigInt("472")
		const uintgFeE8D = BigInt("575")
		const uintXMb7jHs = BigInt("752")
		const uintig7qF1F = BigInt("2003")
		const uintYuwqqNr = BigInt("1837")
		const uintKOkCHFH = BigInt("1920")
		const uintcBC29zh = BigInt("49")
		const uintptVKe6i = BigInt("681")
		const uintLqaGDfn = BigInt("131")
		const uintnCOrdTR = BigInt("1326")
		const uint256OCFgurC = await UNIWHALE_ERC20MVXTL3c.startSale.call(uintRZwQIO, uintIGzHr97, uintrQT77cI, uintUJpuqCN, uintc6EL5eD, {from: accounts[5]});
		const uint256p1nAh4M = await UNIWHALE_ERC20MVXTL3c.startAirdrop.call(uintYuwqqNr, uintig7qF1F, uintXMb7jHs, uintgFeE8D, {from: accounts[1]});
		const uint256bZStSpA = await UNIWHALE_ERC20MVXTL3c.startSale.call(uintnCOrdTR, uintLqaGDfn, uintptVKe6i, uintcBC29zh, uintKOkCHFH, {from: accounts[2]});

		await expect(UNIWHALE_ERC20MVXTL3c.startAirdrop.call(uintYuwqqNr, uintig7qF1F, uintXMb7jHs, uintgFeE8D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20LrnGlne = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uint256ophUqla = await UNIWHALE_ERC20LrnGlne.viewSale.call({from: accounts[2]});
		await UNIWHALE_ERC20LrnGlne.clearETH.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20LrnGlne.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})