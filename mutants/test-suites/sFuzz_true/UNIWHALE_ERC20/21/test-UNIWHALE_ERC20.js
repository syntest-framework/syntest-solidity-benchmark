const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
//		await UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[0]});
//		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20qLRbrS3 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintNqgrgL5 = BigInt("259")
		const uintq9DbOGm = BigInt("307")
		const uintgAteWrK = BigInt("1354")
		const uintd8eKlGO = BigInt("126")
		const uint256md6X8rG = await UNIWHALE_ERC20qLRbrS3.viewSale.call({from: accounts[3]});
//		const uint256hzpnsac = await UNIWHALE_ERC20qLRbrS3.startAirdrop.call(uintd8eKlGO, uintgAteWrK, uintq9DbOGm, uintNqgrgL5, {from: accounts[0]});

		await expect(UNIWHALE_ERC20qLRbrS3.startAirdrop.call(uintd8eKlGO, uintgAteWrK, uintq9DbOGm, uintNqgrgL5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20kNaVa5O = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addresseqvUWhL = accounts[4]
//		const boolCPiZQOF = await UNIWHALE_ERC20kNaVa5O.getAirdrop.call(addresseqvUWhL, {from: accounts[4]});
//		const uint256OXBsH4a = await UNIWHALE_ERC20kNaVa5O.viewSale.call({from: accounts[1]});
//		const uint256KxYGrMe = await UNIWHALE_ERC20kNaVa5O.viewSale.call({from: accounts[0]});
//		await UNIWHALE_ERC20kNaVa5O.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20kNaVa5O.getAirdrop.call(addresseqvUWhL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20HTqwM2M = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256Tn6gF7 = await UNIWHALE_ERC20HTqwM2M.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		await UNIWHALE_ERC20HTqwM2M.clearETH.call({from: accounts[5]});
		const uint256I8LNLVV = await UNIWHALE_ERC20HTqwM2M.viewSale.call({from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintsO0BUzP = BigInt("346")
		const uintMhqkSEN = BigInt("744")
		const uintTa2q9Rs = BigInt("1961")
		const uintCVpVlX = BigInt("189")
		const uintVAXCbf = BigInt("399")
		const uint256c59e2dS = await UNIWHALE_ERC20le6vDUA.startSale.call(uintVAXCbf, uintCVpVlX, uintTa2q9Rs, uintMhqkSEN, uintsO0BUzP, {from: accounts[1]});
//		await UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[4]});
//		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uint256PwtFsgv = await UNIWHALE_ERC20le6vDUA.viewAirdrop.call({from: accounts[1]});
		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintyFYPRKZ = BigInt("1876")
		const uintsLOe2iq = BigInt("52")
		const uintUuL3xFa = BigInt("1142")
		const uintyYTdwfh = BigInt("132")
		const uint256nTl8r1o = await UNIWHALE_ERC20le6vDUA.startAirdrop.call(uintyYTdwfh, uintUuL3xFa, uintsLOe2iq, uintyFYPRKZ, {from: accounts[1]});
		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressHTtW1VY = accounts[5]
//		const boolWZKdtzR = await UNIWHALE_ERC20le6vDUA.tokenSale.call(addressHTtW1VY, {from: accounts[2]});
//		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20le6vDUA.tokenSale.call(addressHTtW1VY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20le6vDUA = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintyt7b8vK = BigInt("712")
		const uintM8AlNYm = BigInt("1248")
		const uintdLDHpMp = BigInt("1060")
		const uintp3k69ei = BigInt("1126")
		const uintvPI1zns = BigInt("1270")
//		await UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[1]});
//		const uint256elPhedN = await UNIWHALE_ERC20le6vDUA.viewSale.call({from: accounts[0]});
//		const uint256vFdOsUr = await UNIWHALE_ERC20le6vDUA.startSale.call(uintvPI1zns, uintp3k69ei, uintdLDHpMp, uintM8AlNYm, uintyt7b8vK, {from: accounts[3]});

		await expect(UNIWHALE_ERC20le6vDUA.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})