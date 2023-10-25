const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walleto5epfDw = await Wallet.new({from: accounts[4]});
		const uintC70KND = BigInt("1089")
		const uinthu0rpMT = BigInt("1768")
		const uint5ZGREW = BigInt("538")
		const uintYVZniap = BigInt("1150")
		const uintmk1db5L = await Walleto5epfDw.deposit.call(uintC70KND, {from: accounts[4]});
		const uintDm4RXD = await Walleto5epfDw.withdraw.call(uinthu0rpMT, {from: accounts[2]});
		const uintcRfjj1P = await Walleto5epfDw.deposit.call(uint5ZGREW, {from: accounts[3]});
		const uintjshMTO = await Walleto5epfDw.withdraw.call(uintYVZniap, {from: accounts[1]});

		await expect(Walleto5epfDw.deposit.call(uintC70KND, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletbPTcCXI = await Wallet.new({from: accounts[0]});
		const uinteQeehrg = BigInt("778")
		const uintbg4Hl1W = BigInt("628")
		const uintksWTJgz = BigInt("559")
		const uinte4bSvkP = BigInt("485")
		const uinth0yo8yc = BigInt("40")
		const uintXCtoJAK = BigInt("842")
		const uintBezZMzw = await WalletbPTcCXI.withdraw.call(uinteQeehrg, {from: accounts[4]});
		const uintgU3fJAA = await WalletbPTcCXI.withdraw.call(uintbg4Hl1W, {from: accounts[1]});
		const uinteiiCJ7I = await WalletbPTcCXI.withdraw.call(uintksWTJgz, {from: accounts[2]});
		const uintfDdd26I = await WalletbPTcCXI.withdraw.call(uinte4bSvkP, {from: "0x0000000000000000000000000000000000000001"});
		const uintzE8vCGZ = await WalletbPTcCXI.deposit.call(uinth0yo8yc, {from: accounts[2]});
		const uintad7u94U = await WalletbPTcCXI.deposit.call(uintXCtoJAK, {from: accounts[1]});

		await expect(WalletbPTcCXI.withdraw.call(uinteQeehrg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})