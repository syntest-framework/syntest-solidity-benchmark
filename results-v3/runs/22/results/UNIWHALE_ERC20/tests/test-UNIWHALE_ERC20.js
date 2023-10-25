const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20sVKsFVQ = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addresskvOku0W = accounts[1]
		const uint256hoYdrP0 = await UNIWHALE_ERC20sVKsFVQ.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const boollaq9pn1 = await UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addresskvOku0W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addresskvOku0W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EMfuXUb = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDlTiIDH = accounts[0]
		const uintojbCLRU = BigInt("1132")
		const uintjoPXDeu = BigInt("1537")
		const uintHpa9Bod = BigInt("633")
		const uintBv7HOpz = BigInt("1095")
		const uintINPx2Et = BigInt("1342")
		const addressw5AkE0q = accounts[3]
		const boolZdn2DuN = await UNIWHALE_ERC20EMfuXUb.tokenSale.call(addressDlTiIDH, {from: accounts[2]});
		const uint256kdpFZe = await UNIWHALE_ERC20EMfuXUb.startSale.call(uintINPx2Et, uintBv7HOpz, uintHpa9Bod, uintjoPXDeu, uintojbCLRU, {from: accounts[0]});
		const boolLfTtYsl = await UNIWHALE_ERC20EMfuXUb.getAirdrop.call(addressw5AkE0q, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20QjDveN3 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintMCPQj2h = BigInt("1347")
		const uinteFAhm3C = BigInt("906")
		const uintlHko3eE = BigInt("70")
		const uintLsh2bVF = BigInt("1985")
		const uintUFdmJX8 = BigInt("973")
		await UNIWHALE_ERC20QjDveN3.clearETH.call({from: accounts[3]});
		const uint256C4muqL6 = await UNIWHALE_ERC20QjDveN3.viewAirdrop.call({from: accounts[4]});
		const uint256AbkEOBx = await UNIWHALE_ERC20QjDveN3.viewAirdrop.call({from: accounts[3]});
		const uint256LrQMEws = await UNIWHALE_ERC20QjDveN3.startSale.call(uintUFdmJX8, uintLsh2bVF, uintlHko3eE, uinteFAhm3C, uintMCPQj2h, {from: accounts[4]});
		const uint256yyoTkqb = await UNIWHALE_ERC20QjDveN3.viewAirdrop.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20QjDveN3.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20sVKsFVQ = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintIt54m7 = BigInt("937")
		const uintHhqRAVT = BigInt("1291")
		const uintOx6YSEY = BigInt("1744")
		const uintckyYHeT = BigInt("1256")
		const uintavJ3RFd = BigInt("1312")
		const addressgpZxI1b = accounts[4]
		const address46HbJA = accounts[1]
		const uint256XYAlhxM = await UNIWHALE_ERC20sVKsFVQ.startSale.call(uintavJ3RFd, uintckyYHeT, uintOx6YSEY, uintHhqRAVT, uintIt54m7, {from: accounts[2]});
		const booltMdBnM6 = await UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addressgpZxI1b, {from: accounts[3]});
		const uint256hoYdrP0 = await UNIWHALE_ERC20sVKsFVQ.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const boollaq9pn1 = await UNIWHALE_ERC20sVKsFVQ.tokenSale.call(address46HbJA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addressgpZxI1b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20sVKsFVQ = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintGGGTQl7 = BigInt("973")
		const uinthD2F2Ci = BigInt("1973")
		const uintihhOg1C = BigInt("519")
		const uintIbbUaxs = BigInt("500")
		const uintQDFG0XB = BigInt("43")
		const addresseYKbqRC = accounts[2]
		const uint256iLIuN9Q = await UNIWHALE_ERC20sVKsFVQ.viewSale.call({from: accounts[1]});
		const uint256hoYdrP0 = await UNIWHALE_ERC20sVKsFVQ.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256enXesi = await UNIWHALE_ERC20sVKsFVQ.startSale.call(uintQDFG0XB, uintIbbUaxs, uintihhOg1C, uinthD2F2Ci, uintGGGTQl7, {from: accounts[2]});
		const boollaq9pn1 = await UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addresseYKbqRC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20sVKsFVQ.tokenSale.call(addresseYKbqRC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20sVKsFVQ = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressw62c15T = accounts[1]
		const uintk7GByUK = BigInt("1682")
		const uintI6IODcO = BigInt("650")
		const uint1OjLYI = BigInt("815")
		const uintDP14csU = BigInt("1360")
		const uintWtCV7jk = BigInt("1710")
		const uint256hoYdrP0 = await UNIWHALE_ERC20sVKsFVQ.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZLAJHNX = await UNIWHALE_ERC20sVKsFVQ.getAirdrop.call(addressw62c15T, {from: accounts[0]});
		const uint2566ZcPJB = await UNIWHALE_ERC20sVKsFVQ.viewSale.call({from: accounts[2]});
		const uint256GxO0NRJ = await UNIWHALE_ERC20sVKsFVQ.viewSale.call({from: accounts[4]});
		const uint256j4ueVZd = await UNIWHALE_ERC20sVKsFVQ.startSale.call(uintWtCV7jk, uintDP14csU, uint1OjLYI, uintI6IODcO, uintk7GByUK, {from: accounts[4]});

		await expect(UNIWHALE_ERC20sVKsFVQ.getAirdrop.call(addressw62c15T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ImjHryx = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintDiXBRJc = BigInt("1672")
		const uintQdo1cPB = BigInt("1204")
		const uintXUWPPe = BigInt("345")
		const uintfafjU07 = BigInt("31")
		const uint256r1gQ1v9 = await UNIWHALE_ERC20ImjHryx.startAirdrop.call(uintfafjU07, uintXUWPPe, uintQdo1cPB, uintDiXBRJc, {from: accounts[0]});
		const uint256d5FFMEa = await UNIWHALE_ERC20ImjHryx.viewSale.call({from: accounts[2]});
	});
})