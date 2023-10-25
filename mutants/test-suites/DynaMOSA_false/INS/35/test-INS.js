const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintUcWfhwO = BigInt("861")
		const stringyccRoPy = "WYLVav7fSDq0GyPSfpMjtVZAApLx6URvBUXLI5HC3A54j"
		const stringNhWEV6 = "A6elOmtdgvGzXTJmlWyvOicxViT6Q2qogiqLptUkIO2v73ySElCd8I1iEiP3WBfaKOOc9Oa"
		const INSw81aODW = await INS.new(uintUcWfhwO, stringyccRoPy, stringNhWEV6, {from: accounts[0]});
		const bytexBKDudq = "0x131d04061b0307101d0218031f11"
		const uintd9nnlVg = BigInt("739")
		const addressJckzXWj = accounts[5]
		const uintP2cErj = BigInt("356")
		const addressjjBTJK = accounts[5]
		const addressaoVSjrf = accounts[3]
		const uintYCoEA9i = BigInt("353")
		const addressLt90xT = accounts[1]
		const byteouNlofh = "0x0e010a1b1919051c171820"
		const uintxs02v9z = BigInt("375")
		const addressctlAmSQ = "0x0000000000000000000000000000000000000001"
//		const boolqE58rsH = await INSw81aODW.approveAndCall.call(addressJckzXWj, uintd9nnlVg, bytexBKDudq, {from: accounts[4]});
//		const boolmjWHnao = await INSw81aODW.transferFrom.call(addressaoVSjrf, addressjjBTJK, uintP2cErj, {from: accounts[0]});
//		const boolglzgCMs = await INSw81aODW.approve.call(addressLt90xT, uintYCoEA9i, {from: accounts[5]});
//		const booljhUUGZX = await INSw81aODW.approveAndCall.call(addressctlAmSQ, uintxs02v9z, byteouNlofh, {from: accounts[3]});

		await expect(INSw81aODW.approveAndCall.call(addressJckzXWj, uintd9nnlVg, bytexBKDudq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintKACNbhC = BigInt("1086")
		const stringxyo7n2 = "EBL7Ng9STi4yeep2JVXXRlbQeOdlb0w2vwoqvrg7VuBNSn2Sc6kNQkYERs2sWY5yuhLfX4hhhyxqiCuC6WpIO"
		const stringrXzFHQ = "rqBMiXiPul8SaztCx2ayDtWmp7mnxhMaRk"
		const INSJ0Lutpc = await INS.new(uintKACNbhC, stringxyo7n2, stringrXzFHQ, {from: accounts[2]});
		const uintTBCyjK7 = BigInt("893")
		const addressf229vfo = accounts[4]
		const addressBtzAtP = accounts[4]
		const uintbsPou5 = BigInt("339")
		const addressuk903Vh = "0x0000000000000000000000000000000000000001"
		const addressRvFRprD = "0x0000000000000000000000000000000000000001"
		const uinteaORLRa = BigInt("604")
		const bytejiquxHG = "0x1b121d0913030f081211070a1a1007041f0e"
		const uintzwCktj = BigInt("1956")
		const addressje2IrK = accounts[2]
		const uintKCG25zy = BigInt("669")
		const addressy5a4WbY = accounts[2]
//		const boolEXzatbB = await INSJ0Lutpc.transferFrom.call(addressBtzAtP, addressf229vfo, uintTBCyjK7, {from: accounts[4]});
//		const boolUzrUJ9Y = await INSJ0Lutpc.transferFrom.call(addressRvFRprD, addressuk903Vh, uintbsPou5, {from: accounts[1]});
//		const boolbf6AAtk = await INSJ0Lutpc.burn.call(uinteaORLRa, {from: accounts[2]});
//		const booly2aghJ0 = await INSJ0Lutpc.approveAndCall.call(addressje2IrK, uintzwCktj, bytejiquxHG, {from: accounts[2]});
//		const boolEaQAWo = await INSJ0Lutpc.approve.call(addressy5a4WbY, uintKCG25zy, {from: accounts[2]});

		await expect(INSJ0Lutpc.transferFrom.call(addressBtzAtP, addressf229vfo, uintTBCyjK7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintqENdpfq = BigInt("981")
		const stringdFfapny = "GvGORvU7W7"
		const stringz3cUQhH = "tmP3YgzPHefQfahzudrvvFuiCSEUC4cBddHY3p8YrjjjhkmxcHbrgO0VVv3j"
		const INSqw7VWVN = await INS.new(uintqENdpfq, stringdFfapny, stringz3cUQhH, {from: accounts[5]});
		const uintREGvrxQ = BigInt("345")
		const addressluXBhWN = accounts[4]
		const uintLg2fADw = BigInt("2007")
		const addresskBu53bp = accounts[0]
		const uintBqAHZaI = BigInt("1247")
		const uinty9Q1MzU = BigInt("1613")
		const addressvVH4ga = accounts[4]
		const addresspP3ao7T = accounts[0]
		const uintO5LLWVc = BigInt("1602")
		const addressFpV0DW4 = accounts[1]
		const addressm6Oclu6 = accounts[1]
		const boolEXQiqIA = await INSqw7VWVN.approve.call(addressluXBhWN, uintREGvrxQ, {from: accounts[2]});
		const boolzN5BoSp = await INSqw7VWVN.approve.call(addresskBu53bp, uintLg2fADw, {from: accounts[4]});
//		const boolJG1DxsB = await INSqw7VWVN.burn.call(uintBqAHZaI, {from: accounts[2]});
//		const boolxW9Z8zj = await INSqw7VWVN.transferFrom.call(addresspP3ao7T, addressvVH4ga, uinty9Q1MzU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgRtmmBk = await INSqw7VWVN.transferFrom.call(addressm6Oclu6, addressFpV0DW4, uintO5LLWVc, {from: accounts[5]});

		assert.equal(boolEXQiqIA, true)
		assert.equal(boolzN5BoSp, true)
		await expect(INSqw7VWVN.burn.call(uintBqAHZaI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintCnGObOo = BigInt("39")
		const stringWZhJ0xk = "c3vhlwU4G5eV2nbGy4oWHQVxfylGnQn8zfEi2lAJl5TBp2hk6Opr9ayAuWNvllW5LvtvoBWC"
		const stringxP3B278 = "n5GkkCOjV27tVOBGLq8P9siwa1xvroeQGclJccjPrW36UsAHoo45NqRUa9UOuSa1abLGTkJQhzT53KC9vYPe"
		const INSwRjbkew = await INS.new(uintCnGObOo, stringWZhJ0xk, stringxP3B278, {from: accounts[3]});
		const uintvDn2l9A = BigInt("499")
		const addressnw1tbuP = accounts[0]
		const byteeIeV7yU = "0x02091e1c1605071c201512060f16170c"
		const uintQH2qMo3 = BigInt("363")
		const addressI4Mqzdk = "0x0000000000000000000000000000000000000001"
		const uintJcv94lx = BigInt("2038")
		const addressIcHuUxt = accounts[4]
		const uintDHdv25A = BigInt("186")
		const uintvBDeye2 = BigInt("85")
		const addressJuNZ4z = accounts[1]
		const addressZrfSa3 = accounts[0]
//		const boolkxEk4E = await INSwRjbkew.transfer.call(addressnw1tbuP, uintvDn2l9A, {from: accounts[0]});
//		const boolzbt8PF3 = await INSwRjbkew.approveAndCall.call(addressI4Mqzdk, uintQH2qMo3, byteeIeV7yU, {from: accounts[0]});
//		const boolBCRE9Ca = await INSwRjbkew.burnFrom.call(addressIcHuUxt, uintJcv94lx, {from: accounts[3]});
//		const boolYC5uWsX = await INSwRjbkew.burn.call(uintDHdv25A, {from: "0x0000000000000000000000000000000000000001"});
//		const boolc7KoNoO = await INSwRjbkew.transferFrom.call(addressZrfSa3, addressJuNZ4z, uintvBDeye2, {from: accounts[4]});

		await expect(INSwRjbkew.transfer.call(addressnw1tbuP, uintvDn2l9A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintdijCERR = BigInt("871")
		const stringvV15SgS = "XaOpNnaD33tsQmn7krNiJq3KxN1L1sAx4GtrV0LCqBoQtiAnFNSy54EkgXyLhIQt"
		const stringeXZ6Jx = "iBXlc5vHJBiD9jytntpRAxg04Jv07OCnwlv4DVDnkVQ0wGTXKzmsarFIA4S5wLX6IsvjPsF"
		const INSK3lVfdt = await INS.new(uintdijCERR, stringvV15SgS, stringeXZ6Jx, {from: accounts[3]});
		const uintzXsJdIO = BigInt("82")
		const addressDdMY93 = accounts[0]
		const uintzFe6YqZ = BigInt("1506")
		const addressmFXogDu = "0x0000000000000000000000000000000000000001"
		const byteOQghhd = "0x0409061701071c1a16091a171107140007101a091610"
		const uintyEYyAOT = BigInt("1025")
		const addressYZTcsL = accounts[2]
		const byteO7oWbSI = "0x110c181f011506041f15141f1e1501"
		const uintXuohzVv = BigInt("1065")
		const addressXHMauKj = accounts[1]
		const uintiDgW4H9 = BigInt("910")
//		const boolsTxeY5n = await INSK3lVfdt.burnFrom.call(addressDdMY93, uintzXsJdIO, {from: accounts[4]});
//		const boolONeiofM = await INSK3lVfdt.burnFrom.call(addressmFXogDu, uintzFe6YqZ, {from: accounts[5]});
//		const boolEaGAjHB = await INSK3lVfdt.approveAndCall.call(addressYZTcsL, uintyEYyAOT, byteOQghhd, {from: accounts[1]});
//		const boolsc5NQh1 = await INSK3lVfdt.approveAndCall.call(addressXHMauKj, uintXuohzVv, byteO7oWbSI, {from: accounts[2]});
//		const boolhLP1kbi = await INSK3lVfdt.burn.call(uintiDgW4H9, {from: accounts[2]});

		await expect(INSK3lVfdt.burnFrom.call(addressDdMY93, uintzXsJdIO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintnu6QSB = BigInt("533")
		const stringzLG5ZjX = "cG2xx9ZqDwcAsvUO1G16Ss2fy2piGwOFTe1zUnNujq9Bw65JGdmcofNaTIrsyw2UdGuBrV33QqGnMGXOB8lZF"
		const stringAfinuOO = "YSnXfJ3OVdw8q4"
		const INSxCOyksu = await INS.new(uintnu6QSB, stringzLG5ZjX, stringAfinuOO, {from: "0x0000000000000000000000000000000000000001"});
		const uintHaX2A6e = BigInt("566")
		const uintSLmpRU8 = BigInt("1099")
		const uinttC7QvDT = BigInt("1360")
		const addressqq9rC1Y = accounts[1]
		const addressueeUHR8 = accounts[4]
		const uintnAgEHJl = BigInt("1690")
		const boolNFXb0Iq = await INSxCOyksu.burn.call(uintHaX2A6e, {from: accounts[1]});
		const boolxfSoeGh = await INSxCOyksu.burn.call(uintSLmpRU8, {from: accounts[0]});
		const boolBvmwIiD = await INSxCOyksu.transferFrom.call(addressueeUHR8, addressqq9rC1Y, uinttC7QvDT, {from: accounts[0]});
		const boolS7sb36R = await INSxCOyksu.burn.call(uintnAgEHJl, {from: accounts[1]});
	});
})