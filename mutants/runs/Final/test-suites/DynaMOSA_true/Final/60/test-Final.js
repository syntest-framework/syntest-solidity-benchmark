const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringxNohVWP = "VsuHEWhheY547hmhVR7ErIE4asyl1Pw1fCVBpG17M7tFv0ymze9n9"
		const stringTpcGwG = "se"
		const uintPmpG6WX = BigInt("1488")
		const FinalIFV4FsK = await Final.new(stringxNohVWP, stringTpcGwG, uintPmpG6WX, {from: accounts[2]});
		const uintph6pRWq = BigInt("1275")
		const addressbRMVGJ8 = accounts[4]
		const uintVdvh0LN = await FinalIFV4FsK.totalSupply.call({from: accounts[4]});
		const uint8bruqdu = await FinalIFV4FsK.decimals.call({from: accounts[3]});
		const boolErYInAR = await FinalIFV4FsK.transfer.call(addressbRMVGJ8, uintph6pRWq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8bruqdu, BigInt("18"))
		assert.equal(uintVdvh0LN, BigInt("1488000000000000000000"))
		await expect(FinalIFV4FsK.transfer.call(addressbRMVGJ8, uintph6pRWq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringMDwe9Xl = "AYMRVa3kl2cFTUoyKgqHZpYTIIxyP04ccIUs1Pfh"
		const stringTKu8hVI = "ZoTFQJlVKYTxgTx98b33fQsfxyib4jLJdNnGF0C6qR2GXYsJV"
		const uintaFReAvt = BigInt("109")
		const Finalvd1kAVD = await Final.new(stringMDwe9Xl, stringTKu8hVI, uintaFReAvt, {from: "0x0000000000000000000000000000000000000001"});
		const uintOGnoRbt = BigInt("339")
		const addressVqiENAm = accounts[4]
		const addressYxbOWSZ = accounts[0]
		const uint6906ku = BigInt("582")
		const addressERMqPPn = accounts[3]
		const boolzh00Z7t = await Finalvd1kAVD.transferFrom.call(addressYxbOWSZ, addressVqiENAm, uintOGnoRbt, {from: accounts[0]});
		const boola13vQRE = await Finalvd1kAVD.approve.call(addressERMqPPn, uint6906ku, {from: accounts[4]});
		const uinta38HfEH = await Finalvd1kAVD.totalSupply.call({from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringRma6goP = "h3xGT5vs8laU37Mb6rwvleEqCELoRKLQrL9OEINro8Z7ob4VqtyjhWZ6PmNg6e"
		const stringpnEuoJz = "Nylu7yAa3X80DPLhQFRpQUX1CS7xnCsG31CKl67unaHqw1YE94"
		const uintWlkFaPJ = BigInt("579")
		const Final6MCZHN = await Final.new(stringRma6goP, stringpnEuoJz, uintWlkFaPJ, {from: accounts[3]});
		const addresspdYw3s = accounts[4]
		const addressRa66Slh = accounts[0]
		const addressULTbx13 = accounts[4]
		const uintcgWHhd = BigInt("260")
		const addressGxtyuok = accounts[4]
		const uintIs1TTlJ = BigInt("1770")
		const addresssv0nxS = accounts[0]
		const booly9Q6mte = await Final6MCZHN.transferownership.call(addresspdYw3s, {from: accounts[4]});
		const uintlYJB0XZ = await Final6MCZHN.allowance.call(addressULTbx13, addressRa66Slh, {from: accounts[1]});
		const boolG8Us3l = await Final6MCZHN.increaseAllowance.call(addressGxtyuok, uintcgWHhd, {from: accounts[2]});
		const boolopf79HJ = await Final6MCZHN.increaseAllowance.call(addresssv0nxS, uintIs1TTlJ, {from: accounts[3]});

		await expect(Final6MCZHN.transferownership.call(addresspdYw3s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string7kk3iF = "dlEItSRDaF6jYdrqHarHcQgwTGgVs3AzMsbsiDueFxUQDumsRgGyr6OsHifX4PPtzlnIqdpWs8c2V5H8dn6hxPE9dxnikz5"
		const stringrOd2Bhr = "5FmWuIIwkD1JpDfiOY8kl1ZsSUZmTDwbF2ePKVBfwZdR"
		const uintU2XtsVe = BigInt("999")
		const Final5alu23 = await Final.new(string7kk3iF, stringrOd2Bhr, uintU2XtsVe, {from: accounts[0]});
		const uintOMd2Boe = BigInt("1710")
		const addressbEByUWr = accounts[2]
		const uinta2jeXqb = BigInt("343")
		const addressNHcdbb = accounts[4]
		const uintEk8kF74 = BigInt("631")
		const addressG2U4YI9 = accounts[1]
		const addressnh2bH1Q = accounts[2]
		const uintHW5eFYA = BigInt("1304")
		const addressWU5nrso = accounts[1]
		const uint8lcXMhOT = await Final5alu23.decimals.call({from: accounts[1]});
		const boolcCpbZr = await Final5alu23.approveAndCall.call(addressbEByUWr, uintOMd2Boe, {from: accounts[2]});
		const boolJs3na0 = await Final5alu23.approve.call(addressNHcdbb, uinta2jeXqb, {from: accounts[0]});
		const stringMjTtNe = await Final5alu23.name.call({from: accounts[0]});
		const boolIU4nr6a = await Final5alu23.transferFrom.call(addressnh2bH1Q, addressG2U4YI9, uintEk8kF74, {from: accounts[5]});
		const boolEcbyEcp = await Final5alu23.transfer.call(addressWU5nrso, uintHW5eFYA, {from: accounts[0]});

		assert.equal(uint8lcXMhOT, BigInt("18"))
		await expect(Final5alu23.approveAndCall.call(addressbEByUWr, uintOMd2Boe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringmBuq6YD = "Ml5C45IyvI2s83FbLKvHZFXEKGFK8xML"
		const stringaFPbpm7 = "OxGsob"
		const uintU7l6fXL = BigInt("219")
		const FinalOTNIvBC = await Final.new(stringmBuq6YD, stringaFPbpm7, uintU7l6fXL, {from: accounts[2]});
		const addresszWazQg = accounts[2]
		const uintvaxMU8n = BigInt("1218")
		const addresskKq8iQ = accounts[4]
		const uintHM7ePqA = BigInt("463")
		const address598Bif = accounts[4]
		const stringtiw8XA = await FinalOTNIvBC.name.call({from: accounts[3]});
		const uintM4uWXnW = await FinalOTNIvBC.balanceOf.call(addresszWazQg, {from: accounts[1]});
		const boollneB6Lz = await FinalOTNIvBC.approve.call(addresskKq8iQ, uintvaxMU8n, {from: accounts[5]});
		const boolk9sD4bu = await FinalOTNIvBC.transfer.call(address598Bif, uintHM7ePqA, {from: accounts[0]});

		assert.equal(boollneB6Lz, true)
		assert.equal(stringtiw8XA, "Ml5C45IyvI2s83FbLKvHZFXEKGFK8xML")
		assert.equal(uintM4uWXnW, BigInt("219000000000000000000"))
		await expect(FinalOTNIvBC.transfer.call(address598Bif, uintHM7ePqA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringv1RBhH = "nAWtZ5HXEzmV6d2vLmj"
		const stringGBnzKxn = "UKdmup5oSsIV1lhRwc775qekWWPDnWwCXREmu7shJn6dvHXny07cR1Lzy"
		const uintOzlgTlu = BigInt("1193")
		const FinalGdVacEa = await Final.new(stringv1RBhH, stringGBnzKxn, uintOzlgTlu, {from: accounts[1]});
		const uintYyrr5eh = BigInt("331")
		const addressa8zUtk = accounts[1]
		const stringfRX7pwa = await FinalGdVacEa.symbol.call({from: accounts[5]});
		const stringYMiSjL = await FinalGdVacEa.name.call({from: accounts[2]});
		const boolwIG3k5I = await FinalGdVacEa.transfer.call(addressa8zUtk, uintYyrr5eh, {from: accounts[0]});
		const stringm4gPIeM = await FinalGdVacEa.symbol.call({from: accounts[3]});

		assert.equal(stringYMiSjL, "nAWtZ5HXEzmV6d2vLmj")
		assert.equal(stringfRX7pwa, "UKdmup5oSsIV1lhRwc775qekWWPDnWwCXREmu7shJn6dvHXny07cR1Lzy")
		await expect(FinalGdVacEa.transfer.call(addressa8zUtk, uintYyrr5eh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringozhbkWw = "m2tPouAqBB1lllpIvUI2qNe4FFGsGYl35iH32rkRguzXSLC9MF2Gu6iwoO"
		const stringYidUQ6 = "WEFRK7pbW164tKLMFkY0mPPbppU7hkMyPGCJpJ5nHN9aMoJiMOCzbCcoT1DciiN7EXhU32cFb"
		const uintZqiU2bT = BigInt("179")
		const FinalCazhYzw = await Final.new(stringozhbkWw, stringYidUQ6, uintZqiU2bT, {from: accounts[2]});
		const addressByaUm71 = accounts[2]
		const addressawx96gh = accounts[5]
		const uintEwm5bF6 = BigInt("1178")
		const addressj1FCMSi = accounts[4]
		const uintOC87YCH = BigInt("785")
		const addressSeRp8Mf = accounts[2]
		const uintx9d7HGz = BigInt("38")
		const addressImXa6L = accounts[3]
		const uintycSYee9 = await FinalCazhYzw.allowance.call(addressawx96gh, addressByaUm71, {from: accounts[2]});
		const uintmwyfIpE = await FinalCazhYzw.totalSupply.call({from: accounts[5]});
		const boolKzAQ8Gt = await FinalCazhYzw.approve.call(addressj1FCMSi, uintEwm5bF6, {from: accounts[0]});
		const boolaTsN7Pd = await FinalCazhYzw.decreaseAllowance.call(addressSeRp8Mf, uintOC87YCH, {from: accounts[1]});
		const boolWn6zVkT = await FinalCazhYzw.transfer.call(addressImXa6L, uintx9d7HGz, {from: accounts[1]});

		assert.equal(boolKzAQ8Gt, true)
		assert.equal(uintmwyfIpE, BigInt("179000000000000000000"))
		assert.equal(uintycSYee9, BigInt("0"))
		await expect(FinalCazhYzw.decreaseAllowance.call(addressSeRp8Mf, uintOC87YCH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string7kk3iF = "dlEItSRDaF6jYdrqHarHcQgwTGgVs3AzMsbsiDueFxUQDumsRgGyr6OsHifX4PPtzlnIqdpWs8c2V5H8dn6hxPE9dxnikz5"
		const stringrOd2Bhr = "5FmWuIIwkD1JpDfiOY8kl1ZsSUZmTDwbF2ePKVBfwZdR"
		const uintmwOwfEK = BigInt("999")
		const Final5alu23 = await Final.new(string7kk3iF, stringrOd2Bhr, uintmwOwfEK, {from: accounts[0]});
		const uintujkceEB = BigInt("343")
		const addressc6Saxfs = accounts[4]
		const uintWOtAPrq = BigInt("631")
		const addressZheqHnu = accounts[1]
		const addressMgj1U7b = accounts[3]
		const uintf55qj8D = BigInt("1304")
		const addressAuMZjWz = accounts[1]
		const uint8lcXMhOT = await Final5alu23.decimals.call({from: accounts[1]});
		const boolJs3na0 = await Final5alu23.approve.call(addressc6Saxfs, uintujkceEB, {from: accounts[0]});
		const stringMjTtNe = await Final5alu23.name.call({from: accounts[0]});
		const boolIU4nr6a = await Final5alu23.transferFrom.call(addressMgj1U7b, addressZheqHnu, uintWOtAPrq, {from: accounts[5]});
		const boolEcbyEcp = await Final5alu23.transfer.call(addressAuMZjWz, uintf55qj8D, {from: accounts[0]});

		assert.equal(boolJs3na0, true)
		assert.equal(stringMjTtNe, "dlEItSRDaF6jYdrqHarHcQgwTGgVs3AzMsbsiDueFxUQDumsRgGyr6OsHifX4PPtzlnIqdpWs8c2V5H8dn6hxPE9dxnikz5")
		assert.equal(uint8lcXMhOT, BigInt("18"))
		await expect(Final5alu23.transferFrom.call(addressMgj1U7b, addressZheqHnu, uintWOtAPrq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string5tl7bk = "aMRnVRPdYsCc3ChC0hHWEJaEcF4Q3mH9g5uILyZbb2dSIfLO6Yl9kTGa3bCdlWEx0rI9I1CawTnLRzJWSaXwU6MuijuEgA9"
		const stringzWb53zm = "UNdkCW6e3L6dSGG2AHDVCBtISj6s4e2YxAo89nuc2gl0Mjws"
		const uintturrv0p = BigInt("178")
		const FinalXmDLy07 = await Final.new(string5tl7bk, stringzWb53zm, uintturrv0p, {from: accounts[2]});
		const addressf0nSaxq = accounts[2]
		const addressQkIGhh7 = accounts[2]
		const uintjVjHb2y = BigInt("1531")
		const addressvfZhbwX = accounts[4]
		const addressGQml5vL = accounts[2]
		const uintTLQImcC = BigInt("301")
		const addressHH8wZFV = "0x0000000000000000000000000000000000000001"
		const addressfNTHIt = accounts[2]
		const uintyGWbMci = await FinalXmDLy07.allowance.call(addressQkIGhh7, addressf0nSaxq, {from: accounts[3]});
		const stringVjrlcD3 = await FinalXmDLy07.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrxkcV1j = await FinalXmDLy07.approveAndCall.call(addressvfZhbwX, uintjVjHb2y, {from: accounts[2]});
		const uint8wF2Lch = await FinalXmDLy07.decimals.call({from: accounts[3]});
		const bool5PTego = await FinalXmDLy07.transferownership.call(addressGQml5vL, {from: accounts[4]});
		const boolzsL5mql = await FinalXmDLy07.transferFrom.call(addressfNTHIt, addressHH8wZFV, uintTLQImcC, {from: accounts[5]});

		assert.equal(boolrxkcV1j, true)
		assert.equal(stringVjrlcD3, "UNdkCW6e3L6dSGG2AHDVCBtISj6s4e2YxAo89nuc2gl0Mjws")
		assert.equal(uint8wF2Lch, BigInt("18"))
		assert.equal(uintyGWbMci, BigInt("0"))
		await expect(FinalXmDLy07.transferownership.call(addressGQml5vL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringozhbkWw = "m2tPouAqBB1lllpIvUI2qNe4FFGsGYl35iH32rkRguzXSLC9MF2Gu6iwoO"
		const stringYidUQ6 = "WEFRK7pbW164tKLMFkY0mPPbppU7hkMyPGCJpJ5nHN9aMoJiMOCzbCcoT1DciiN7EXhU32cFb"
		const uintnCf3yM5 = BigInt("179")
		const FinalCazhYzw = await Final.new(stringozhbkWw, stringYidUQ6, uintnCf3yM5, {from: accounts[2]});
		const addressKdEpU25 = accounts[3]
		const uintSv44Yga = BigInt("1142")
		const addressE6rNSyO = accounts[0]
		const addressSi2lKk = accounts[3]
		const addressqsBPwWl = accounts[2]
		const addressCLAv32w = accounts[6]
		const uinthm1AWr9 = BigInt("782")
		const addressFS6SGtV = accounts[0]
		const uintY17PEMB = BigInt("31")
		const addressfPcEM8u = accounts[3]
		const uintc25K2ON = await FinalCazhYzw.balanceOf.call(addressKdEpU25, {from: "0x0000000000000000000000000000000000000001"});
		const booldq1r8o = await FinalCazhYzw.transfer.call(addressE6rNSyO, uintSv44Yga, {from: accounts[2]});
		const boolkzjDkNu = await FinalCazhYzw.transferownership.call(addressSi2lKk, {from: accounts[2]});
		const uintycSYee9 = await FinalCazhYzw.allowance.call(addressCLAv32w, addressqsBPwWl, {from: accounts[2]});
		const bool2jTZGp = await FinalCazhYzw.approve.call(addressFS6SGtV, uinthm1AWr9, {from: accounts[4]});
		const boolWn6zVkT = await FinalCazhYzw.transfer.call(addressfPcEM8u, uintY17PEMB, {from: accounts[1]});

		assert.equal(bool2jTZGp, true)
		assert.equal(booldq1r8o, true)
		assert.equal(boolkzjDkNu, true)
		assert.equal(uintc25K2ON, BigInt("0"))
		assert.equal(uintycSYee9, BigInt("0"))
		await expect(FinalCazhYzw.transfer.call(addressfPcEM8u, uintY17PEMB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringozhbkWw = "m2tPouAqBB1lllpIvUI2qNe4FFGsGYl35iH32rkRguzXSLC9MF2Gu6iwoO"
		const stringYidUQ6 = "WEFRK7pbW164tKLMFkY0mPPbppU7hkMyPGCJpJ5nHN9aMoJiMOCzbCcoT1DciiN7EXhU32cFb"
		const uintXW4nOc = BigInt("179")
		const FinalCazhYzw = await Final.new(stringozhbkWw, stringYidUQ6, uintXW4nOc, {from: accounts[2]});
		const addresslq92Zzh = accounts[3]
		const uintMGEjsv = BigInt("0")
		const addressgJ4uVYj = accounts[3]
		const uintc25K2ON = await FinalCazhYzw.balanceOf.call(addresslq92Zzh, {from: "0x0000000000000000000000000000000000000001"});
		const boolWn6zVkT = await FinalCazhYzw.transfer.call(addressgJ4uVYj, uintMGEjsv, {from: accounts[1]});

		assert.equal(boolWn6zVkT, true)
		assert.equal(uintc25K2ON, BigInt("0"))
	});
})