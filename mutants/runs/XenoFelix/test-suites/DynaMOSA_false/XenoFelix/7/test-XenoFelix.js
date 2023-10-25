const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringHOxXPGS = "5rDyhaj4MklwAggSca7CLADxtyViyRgiBpjCgVxBHa"
		const stringsWPoN3Y = "GY4qmhHeh"
		const uintFbNNPBA = BigInt("7")
		const XenoFelixslqQDXa = await XenoFelix.new(stringHOxXPGS, stringsWPoN3Y, uintFbNNPBA, {from: accounts[0]});
		const addresspCNwkps = accounts[1]
		const addressUq0czI5 = accounts[4]
		const addressY2k97fb = accounts[3]
		const uintqxkqbl = BigInt("2039")
		const addressykKoMqK = accounts[0]
		const addressy2Kx4Or = accounts[4]
		const uintoweWYrT = BigInt("66")
		const addressruSOu6l = accounts[0]
		const address135tKm = await XenoFelixslqQDXa.notFrozenAndTransaction.call(addressUq0czI5, addresspCNwkps, {from: accounts[3]});
		const addressuhkAxOQ = await XenoFelixslqQDXa.notFrozen.call(addressY2k97fb, {from: accounts[0]});
		const boolakgVzmN = await XenoFelixslqQDXa.transferFrom.call(addressy2Kx4Or, addressykKoMqK, uintqxkqbl, {from: accounts[1]});
		const boolS1yunq = await XenoFelixslqQDXa.transfer.call(addressruSOu6l, uintoweWYrT, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintyb1VN8U = BigInt("1918")
		const uintx0muOIw = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintyb1VN8U, uintx0muOIw, {from: accounts[4]});
		const uinthiAkEH0 = BigInt("279")
		const addressbuQKfBY = accounts[3]
		const addressHu1uGsy = "0x0000000000000000000000000000000000000001"
		const uinttVGCCE1 = BigInt("1319")
		const addressyker3NS = accounts[2]
		const addresseLhByuX = accounts[0]
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressHu1uGsy, addressbuQKfBY, uinthiAkEH0, {from: accounts[4]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addresseLhByuX, addressyker3NS, uinttVGCCE1, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixPGiOCIj = await XenoFelix.new({from: accounts[3]});
		const addressHD9YwRA = accounts[2]
		const uintMjZhKmV = BigInt("1519")
		const addresswaFhvVJ = accounts[0]
		const uint7gl9D3 = BigInt("1991")
		const addressaqRQRso = accounts[4]
		const addressqIlPcf = accounts[4]
		const uinteRb2W1G = BigInt("238")
		const addressvZ8ruGL = accounts[3]
		const uintMiriqSD = BigInt("967")
		const addressv9aX7So = accounts[1]
		const boolK7Fcy6h = await XenoFelixPGiOCIj.freezeAccount.call(addressHD9YwRA, {from: accounts[5]});
		await XenoFelixPGiOCIj.unpause.call({from: accounts[1]});
		const boolU1P7Eb8 = await XenoFelixPGiOCIj.transfer.call(addresswaFhvVJ, uintMjZhKmV, {from: accounts[0]});
		const booldPuiIqK = await XenoFelixPGiOCIj.transferFrom.call(addressqIlPcf, addressaqRQRso, uint7gl9D3, {from: accounts[2]});
		const boolpZVgXCl = await XenoFelixPGiOCIj.decreaseAllowance.call(addressvZ8ruGL, uinteRb2W1G, {from: accounts[4]});
		const boolrW7RguN = await XenoFelixPGiOCIj.unlock.call(addressv9aX7So, uintMiriqSD, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringmGYowcw = "G9RPRo7sB92oCvPRMyzxj22gQdivEmJVnbzG1laiT"
		const stringmhSwRO8 = "6P"
		const uinthxIA3J3 = BigInt("20")
		const XenoFelixZA4ce8D = await XenoFelix.new(stringmGYowcw, stringmhSwRO8, uinthxIA3J3, {from: accounts[2]});
		const addressM71ILUs = accounts[5]
		const uintqf2HwO7 = BigInt("1706")
		const addressJq3blcL = "0x0000000000000000000000000000000000000001"
		const addressI3qeUze = accounts[4]
		const uinteKWFnuM = BigInt("1110")
		const uintYfNjtvD = BigInt("2025")
		const addressnsKp3bZ = accounts[1]
		const uintiCtRXqg = BigInt("1552")
		const addressY2z9ei = accounts[2]
		const boolXJSO90V = await XenoFelixZA4ce8D.isOwner.call(addressM71ILUs, {from: accounts[3]});
		const boolX3DKRc9 = await XenoFelixZA4ce8D.transferFrom.call(addressI3qeUze, addressJq3blcL, uintqf2HwO7, {from: accounts[0]});
		const boolWnFZcw1 = await XenoFelixZA4ce8D.transferWithLock.call(addressnsKp3bZ, uintYfNjtvD, uinteKWFnuM, {from: accounts[0]});
		const boolyknxEtZ = await XenoFelixZA4ce8D.burnOwner.call(addressY2z9ei, uintiCtRXqg, {from: accounts[0]});
		await XenoFelixZA4ce8D.whenPaused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringqHDiapF = "Y5V0J7L"
		const stringhg9hF8w = "ix63oyIqiwv34xJ3llRa9QvMDlwsS7BvjFAFzyIzRpWXTgRaAe2XHQ6C41sBAgK9QiBUjgH2CUspWdXMWis7I8"
		const uintvJn1eGk = BigInt("162")
		const XenoFelixjvIc6Sk = await XenoFelix.new(stringqHDiapF, stringhg9hF8w, uintvJn1eGk, {from: accounts[3]});
		const uintQMrHULU = BigInt("1982")
		const addressrP8XnW = accounts[2]
		const addressa3EFa5 = accounts[5]
		const uintNkC2513 = BigInt("1496")
		const addressZ5gSPYY = accounts[1]
		const uintDdfsXPH = BigInt("1081")
		const boolUNecL0U = await XenoFelixjvIc6Sk.transferFrom.call(addressa3EFa5, addressrP8XnW, uintQMrHULU, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixjvIc6Sk.whenNotPaused.call({from: accounts[0]});
		await XenoFelixjvIc6Sk.pause.call({from: accounts[5]});
		const boolaj8GGR6 = await XenoFelixjvIc6Sk.decreaseAllowance.call(addressZ5gSPYY, uintNkC2513, {from: accounts[4]});
		const uint256h68qf5v = await XenoFelixjvIc6Sk.burn.call(uintDdfsXPH, {from: accounts[4]});
		await XenoFelixjvIc6Sk.whenPaused.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringH9Ugqiw = "GAiOPJuxj2zwgCya7VzUNFDtpW3FwI9PDlwyZh86D4wr"
		const string8TdlJK = "3m9F7VvARz6ADbG3e"
		const uintR0Imw7s = BigInt("73")
		const XenoFelix46EzU0 = await XenoFelix.new(stringH9Ugqiw, string8TdlJK, uintR0Imw7s, {from: accounts[4]});
		const uintlxTH1nW = BigInt("1039")
		const addressLnQ4wsB = accounts[4]
		const addresskdFZPE4 = accounts[2]
		const addressL5B5RL9 = accounts[1]
		const boolOZRfGDV = await XenoFelix46EzU0.decreaseAllowance.call(addressLnQ4wsB, uintlxTH1nW, {from: accounts[4]});
		const uint256j2EAh77 = await XenoFelix46EzU0.allowance.call(addressL5B5RL9, addresskdFZPE4, {from: accounts[4]});
		await XenoFelix46EzU0.onlyPauser.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringQNZGra2 = "YQlJECyl1YEbkf53AXEnjBR"
		const stringaJDVRqi = "Di9p3k2fGtGube7ThYyc5fedDeozrHqjqDHgY5Y6OY4yTKOLSvkWOiGD"
		const uintSsxtDuj = BigInt("91")
		const XenoFelixx9Unz86 = await XenoFelix.new(stringQNZGra2, stringaJDVRqi, uintSsxtDuj, {from: "0x0000000000000000000000000000000000000001"});
		const uintT17uXOH = BigInt("404")
		const addressJ04wBwm = accounts[5]
		const uintNzs1Jbp = BigInt("1132")
		const addressoJ1xb8 = accounts[4]
		const addresshPlIEoS = accounts[5]
		const uintpqYZYf = BigInt("749")
		const addressa4j22OK = accounts[3]
		await XenoFelixx9Unz86.whenNotPaused.call({from: accounts[4]});
		const boolpws4qJu = await XenoFelixx9Unz86.approve.call(addressJ04wBwm, uintT17uXOH, {from: "0x0000000000000000000000000000000000000001"});
		const boolG2OVYl7 = await XenoFelixx9Unz86.transferFrom.call(addresshPlIEoS, addressoJ1xb8, uintNzs1Jbp, {from: accounts[2]});
		const boolOaQAXo8 = await XenoFelixx9Unz86.acceptOwnership.call({from: accounts[5]});
		const boolSEAAsfD = await XenoFelixx9Unz86.transfer.call(addressa4j22OK, uintpqYZYf, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringvFgbqQs = "nVHsnsg8yJMKFfI9lhkJI38hMF7xhvExkAk"
		const stringixXyj1Q = "0wTTJ3keF"
		const uintjKfA9wG = BigInt("1421")
		const uintlXpq8n8 = BigInt("128")
		const XenoFelixg6Y7AOQ = await XenoFelix.new(stringvFgbqQs, stringixXyj1Q, uintjKfA9wG, uintlXpq8n8, {from: "0x0000000000000000000000000000000000000001"});
		const uintsd1nNC = BigInt("1428")
		const addresssg3NI6U = accounts[3]
		const uintYmGqsxX = BigInt("937")
		const boolplP0Pn8 = await XenoFelixg6Y7AOQ.increaseAllowance.call(addresssg3NI6U, uintsd1nNC, {from: accounts[5]});
		const uint256jxdZ0lv = await XenoFelixg6Y7AOQ.burn.call(uintYmGqsxX, {from: accounts[2]});
		const uint8FGXSoaH = await XenoFelixg6Y7AOQ.decimals.call({from: accounts[3]});
		await XenoFelixg6Y7AOQ.unpause.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringHeS5qMr = "qQ6S8o8"
		const stringTbNgTXl = "7SpHGuYtwxiazODb9GtbCtech2mm4JqtKs"
		const uinthmcSDu7 = BigInt("61")
		const XenoFelixG4vYPvg = await XenoFelix.new(stringHeS5qMr, stringTbNgTXl, uinthmcSDu7, {from: accounts[1]});
		const addressrCXQZ94 = accounts[1]
		const addressGBsW2Ct = accounts[5]
		const addresshK16Ri0 = accounts[5]
		const uint2563JRvxh = await XenoFelixG4vYPvg.balanceOf.call(addressrCXQZ94, {from: accounts[4]});
		await XenoFelixG4vYPvg.onlyPauser.call({from: accounts[1]});
		const addressKwkqUrJ = await XenoFelixG4vYPvg.transferOwnership.call(addressGBsW2Ct, {from: accounts[2]});
		const addressttvR2V = await XenoFelixG4vYPvg.addPauser.call(addresshK16Ri0, {from: accounts[2]});
		await XenoFelixG4vYPvg.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintEB9HqvM = BigInt("1918")
		const uinteSusyYs = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintEB9HqvM, uinteSusyYs, {from: accounts[4]});
		const uintfKEowgC = BigInt("279")
		const addresstSzDCUx = accounts[3]
		const addressj0HbbA = "0x0000000000000000000000000000000000000001"
		const uintXIY1tSa = BigInt("1319")
		const addressNvKgpf = accounts[2]
		const addressQutaQM7 = accounts[0]
		const boolKK0uDDa = await XenoFelixoyNJ6Cd.acceptOwnership.call({from: accounts[2]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressj0HbbA, addresstSzDCUx, uintfKEowgC, {from: accounts[4]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressQutaQM7, addressNvKgpf, uintXIY1tSa, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringM6l98Lx = "p"
		const stringPDDFE2 = "UAqigCA4U2l2D"
		const uintFhd8xV9 = BigInt("1047")
		const uintlJlfIO = BigInt("13")
		const XenoFelixdjMZxtL = await XenoFelix.new(stringM6l98Lx, stringPDDFE2, uintFhd8xV9, uintlJlfIO, {from: accounts[4]});
		const addressVsmvGTq = accounts[4]
		const uintZPmsehU = BigInt("1739")
		const uintl7XidK = BigInt("402")
		const addressaotRue3 = accounts[0]
		const stringBbFCKHG = await XenoFelixdjMZxtL.name.call({from: accounts[4]});
		const addressENBUMQ = await XenoFelixdjMZxtL.addPauser.call(addressVsmvGTq, {from: accounts[2]});
		const stringAklvz1x = await XenoFelixdjMZxtL.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolilRnAXG = await XenoFelixdjMZxtL.transferWithLock.call(addressaotRue3, uintl7XidK, uintZPmsehU, {from: accounts[2]});
		const stringhhiglYz = await XenoFelixdjMZxtL.name.call({from: accounts[4]});

		assert.equal(stringBbFCKHG, "p")
		await expect(XenoFelixdjMZxtL.addPauser.call(addressVsmvGTq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintjRIXqBu = BigInt("1918")
		const uintCchYa18 = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintjRIXqBu, uintCchYa18, {from: accounts[4]});
		const uintOZrFZEn = BigInt("279")
		const addresscVwFIme = accounts[3]
		const address4PQFqh = "0x0000000000000000000000000000000000000001"
		const uintfAyhrHf = BigInt("1319")
		const addressJT8rdUy = accounts[3]
		const addressfvlMGRO = accounts[0]
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(address4PQFqh, addresscVwFIme, uintOZrFZEn, {from: accounts[4]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressfvlMGRO, addressJT8rdUy, uintfAyhrHf, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintczXsSnX = BigInt("1918")
		const uintJ5gJ6vK = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintczXsSnX, uintJ5gJ6vK, {from: accounts[4]});
		const uintUC4Ol5y = BigInt("1151")
		const addresshzNXUww = accounts[3]
		const addressNVXIA37 = accounts[1]
		const addresss3nPQLl = accounts[4]
		const uintzGcsnTq = BigInt("279")
		const addressRhE9CY = accounts[3]
		const addressZc5VWp3 = "0x0000000000000000000000000000000000000001"
		const uintH3FKV3 = BigInt("899")
		const uintDGAelf = BigInt("1319")
		const addressJRSTnuE = accounts[3]
		const addressJYdJa1c = accounts[0]
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressNVXIA37, addresshzNXUww, uintUC4Ol5y, {from: accounts[4]});
		const boolt1ZitGd = await XenoFelixoyNJ6Cd.isOwner.call(addresss3nPQLl, {from: accounts[2]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressZc5VWp3, addressRhE9CY, uintzGcsnTq, {from: accounts[4]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintH3FKV3, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressJYdJa1c, addressJRSTnuE, uintDGAelf, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressNVXIA37, addresshzNXUww, uintUC4Ol5y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uint0SBo64 = BigInt("1918")
		const uintZa2dpoo = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uint0SBo64, uintZa2dpoo, {from: accounts[4]});
		const uintFTnuT0a = BigInt("1151")
		const addressP7DEgd3 = accounts[3]
		const addressHtSYRa = accounts[1]
		const addressbrXQwJ = accounts[4]
		const uintLP7Ti9b = BigInt("279")
		const addresse7LFjk6 = accounts[3]
		const addressruqdxdH = "0x0000000000000000000000000000000000000001"
		const uintiWwumFH = BigInt("899")
		const uintMP40lse = BigInt("1319")
		const addressskcD3k9 = accounts[3]
		const addressiguih3Y = accounts[0]
		const uint8NLoYHPr = await XenoFelixoyNJ6Cd.decimals.call({from: accounts[5]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressHtSYRa, addressP7DEgd3, uintFTnuT0a, {from: accounts[4]});
		const boolt1ZitGd = await XenoFelixoyNJ6Cd.isOwner.call(addressbrXQwJ, {from: accounts[2]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressruqdxdH, addresse7LFjk6, uintLP7Ti9b, {from: accounts[4]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintiWwumFH, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressiguih3Y, addressskcD3k9, uintMP40lse, {from: accounts[5]});

		assert.equal(uint8NLoYHPr, BigInt("14"))
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressHtSYRa, addressP7DEgd3, uintFTnuT0a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintNczwF5X = BigInt("1918")
		const uintsTARIH = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintNczwF5X, uintsTARIH, {from: accounts[4]});
		const addressF8ReZ8 = accounts[4]
		const uintbHP8RA = BigInt("899")
		const uintdHn0Kjo = BigInt("1319")
		const addressm9C4XkZ = accounts[3]
		const addresslJYykyf = accounts[0]
		const boolt1ZitGd = await XenoFelixoyNJ6Cd.isOwner.call(addressF8ReZ8, {from: accounts[2]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintbHP8RA, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addresslJYykyf, addressm9C4XkZ, uintdHn0Kjo, {from: accounts[5]});

		assert.equal(boolt1ZitGd, true)
		await expect(XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uinttlYwLHD = BigInt("1918")
		const uintEhFrKF = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uinttlYwLHD, uintEhFrKF, {from: accounts[4]});
		const uintVWHsjGa = BigInt("1847")
		const addresscLOmn2k = accounts[3]
		const uintMDIlnrV = BigInt("1151")
		const addressVRQFdWd = accounts[4]
		const addressOYqmxx1 = accounts[1]
		const addressCiSJqeN = accounts[4]
		const uintLS4AAiz = BigInt("279")
		const addressGvFsiEo = accounts[3]
		const addressYpqNVO = "0x0000000000000000000000000000000000000001"
		const uinthQBlE2O = BigInt("899")
		const uintDnVTAwL = BigInt("1319")
		const addressLYjkdG = accounts[3]
		const addressDl8Tpu5 = accounts[0]
		const boolJWrwmnJ = await XenoFelixoyNJ6Cd.decreaseAllowance.call(addresscLOmn2k, uintVWHsjGa, {from: accounts[3]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressOYqmxx1, addressVRQFdWd, uintMDIlnrV, {from: accounts[4]});
		const boolt1ZitGd = await XenoFelixoyNJ6Cd.isOwner.call(addressCiSJqeN, {from: accounts[2]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressYpqNVO, addressGvFsiEo, uintLS4AAiz, {from: accounts[4]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uinthQBlE2O, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressDl8Tpu5, addressLYjkdG, uintDnVTAwL, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.decreaseAllowance.call(addresscLOmn2k, uintVWHsjGa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintetJxhk1 = BigInt("1918")
		const uintQJN7d43 = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintetJxhk1, uintQJN7d43, {from: accounts[4]});
		const uintSU4GsA = BigInt("1151")
		const addressc0QYRKo = accounts[3]
		const addressIxSgkyl = accounts[1]
		const addresspK5Q6Wf = accounts[5]
		const uintP2bNpgG = BigInt("1383")
		const addressQmqGZoe = accounts[4]
		const addresssTMMEe = accounts[4]
		const uinthPgkFdM = BigInt("279")
		const addressTecM5Wy = accounts[3]
		const addressOiqfhXY = "0x0000000000000000000000000000000000000001"
		const uintkvXuc63 = BigInt("899")
		const uintj8l3D0h = BigInt("1319")
		const addressESuJWIq = accounts[4]
		const addressWeJ5I5t = accounts[0]
		const boolX3kijvE = await XenoFelixoyNJ6Cd.paused.call({from: accounts[4]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressIxSgkyl, addressc0QYRKo, uintSU4GsA, {from: accounts[4]});
		const boolt1ZitGd = await XenoFelixoyNJ6Cd.isOwner.call(addresspK5Q6Wf, {from: accounts[2]});
		const uint256v7YVH8n = await XenoFelixoyNJ6Cd.burn.call(uintP2bNpgG, {from: accounts[3]});
		const boolWUj5HnK = await XenoFelixoyNJ6Cd.freezeAccount.call(addressQmqGZoe, {from: "0x0000000000000000000000000000000000000001"});
		const boolHcb8F5h = await XenoFelixoyNJ6Cd.isPauser.call(addresssTMMEe, {from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const boolsBU6PBE = await XenoFelixoyNJ6Cd.transferFrom.call(addressOiqfhXY, addressTecM5Wy, uinthPgkFdM, {from: accounts[4]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintkvXuc63, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressWeJ5I5t, addressESuJWIq, uintj8l3D0h, {from: accounts[5]});

		assert.equal(boolX3kijvE, false)
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressIxSgkyl, addressc0QYRKo, uintSU4GsA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXnMZdHj = "cICBoWl2g6G56NGcT4wYCiBsDrBswrPcR1"
		const stringRzbRwD = "IE2DcJD4agnNcmQPdLBMth8YObkLzfgKMZ6QQV3"
		const uintNYK6txr = BigInt("212")
		const XenoFelixMQ5CeIR = await XenoFelix.new(stringXnMZdHj, stringRzbRwD, uintNYK6txr, {from: accounts[5]});
		const uintSx8oXIb = BigInt("941")
		const addresse57xyZe = "0x0000000000000000000000000000000000000001"
		const address5sZiXI = accounts[5]
		const addressAG8fNuy = accounts[4]
		const uintXFLGfuk = BigInt("1975")
		const addressIEvI9Y4 = accounts[4]
		const boolQzuwWm = await XenoFelixMQ5CeIR.transfer.call(addresse57xyZe, uintSx8oXIb, {from: "0x0000000000000000000000000000000000000001"});
		const stringcXWluSv = await XenoFelixMQ5CeIR.symbol.call({from: accounts[4]});
		const uint256JvRTDtu = await XenoFelixMQ5CeIR.allowance.call(addressAG8fNuy, address5sZiXI, {from: accounts[2]});
		const booljRqPkIm = await XenoFelixMQ5CeIR.transfer.call(addressIEvI9Y4, uintXFLGfuk, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintSlID4vT = BigInt("1918")
		const uintkcwawd2 = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintSlID4vT, uintkcwawd2, {from: accounts[4]});
		const uintMZiVEP8 = BigInt("806")
		const addressIrtBxgH = "0x0000000000000000000000000000000000000001"
		const uintIns8XGK = BigInt("1151")
		const addressNJ99UBp = accounts[3]
		const address3CEYv9 = accounts[2]
		const uintjwV9ywP = BigInt("1319")
		const addressZzTeOdz = accounts[3]
		const addressXfNGUUx = accounts[0]
		const boolMD1lAbe = await XenoFelixoyNJ6Cd.approve.call(addressIrtBxgH, uintMZiVEP8, {from: accounts[0]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(address3CEYv9, addressNJ99UBp, uintIns8XGK, {from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		const booliur4xk = await XenoFelixoyNJ6Cd.paused.call({from: accounts[5]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressXfNGUUx, addressZzTeOdz, uintjwV9ywP, {from: accounts[5]});

		assert.equal(boolMD1lAbe, true)
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(address3CEYv9, addressNJ99UBp, uintIns8XGK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uints7Tgltl = BigInt("1918")
		const uintxtLayfW = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uints7Tgltl, uintxtLayfW, {from: accounts[4]});
		const uintLpRHheU = BigInt("1968")
		const addressVdftu3F = accounts[2]
		const uintFcrrtVL = BigInt("1151")
		const addresshfGl2LC = accounts[3]
		const addressoJV5pQp = accounts[1]
		const uintJNPmQD4 = BigInt("899")
		const addresscabjoGn = accounts[1]
		const uintBLHonq = BigInt("1319")
		const addressTREpI1k = accounts[3]
		const addressb8USaMT = accounts[0]
		const addressrEhYNZ7 = await XenoFelixoyNJ6Cd.burnFrom.call(addressVdftu3F, uintLpRHheU, {from: accounts[0]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressoJV5pQp, addresshfGl2LC, uintFcrrtVL, {from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintJNPmQD4, {from: accounts[0]});
		const boolyw3lsHh = await XenoFelixoyNJ6Cd.isOwner.call(addresscabjoGn, {from: accounts[3]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressb8USaMT, addressTREpI1k, uintBLHonq, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.burnFrom.call(addressVdftu3F, uintLpRHheU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintfWVGaHg = BigInt("1918")
		const uintwVF4DU5 = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintfWVGaHg, uintwVF4DU5, {from: accounts[4]});
		const uintFUHKKUW = BigInt("713")
		const addressIXjVPW3 = accounts[2]
		const uintevYU4bc = BigInt("1151")
		const addressu0Z5OEc = accounts[3]
		const addressKUEy2nd = accounts[1]
		const uintliEJE4w = BigInt("899")
		const uintafVyar9 = BigInt("1319")
		const addressghW6iA9 = accounts[3]
		const addressx4qE5lE = accounts[0]
		const boolkPWIBDf = await XenoFelixoyNJ6Cd.increaseAllowance.call(addressIXjVPW3, uintFUHKKUW, {from: "0x0000000000000000000000000000000000000001"});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressKUEy2nd, addressu0Z5OEc, uintevYU4bc, {from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		await XenoFelixoyNJ6Cd.onlyOwner.call({from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[3]});
		const uint256b32y8ZQ = await XenoFelixoyNJ6Cd.burn.call(uintliEJE4w, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressx4qE5lE, addressghW6iA9, uintafVyar9, {from: accounts[5]});

		assert.equal(boolkPWIBDf, true)
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressKUEy2nd, addressu0Z5OEc, uintevYU4bc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintz0sLgxz = BigInt("1918")
		const uintQ6yf2jb = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintz0sLgxz, uintQ6yf2jb, {from: accounts[4]});
		const uintgNpiO8V = BigInt("960")
		const uintHfGsVfF = BigInt("25")
		const addressHiKJsOn = accounts[3]
		const uintkNqdjnu = BigInt("1151")
		const addressaln1FSq = accounts[3]
		const addressTVUItO = accounts[1]
		const uintmCCfuhd = BigInt("1319")
		const addressQfqSH5S = accounts[3]
		const addressB1U0ue = accounts[0]
		const boolaaJUsAE = await XenoFelixoyNJ6Cd.transferWithLock.call(addressHiKJsOn, uintHfGsVfF, uintgNpiO8V, {from: accounts[4]});
		const boolNXohANm = await XenoFelixoyNJ6Cd.transferFrom.call(addressTVUItO, addressaln1FSq, uintkNqdjnu, {from: accounts[4]});
		await XenoFelixoyNJ6Cd.unpause.call({from: accounts[1]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressB1U0ue, addressQfqSH5S, uintmCCfuhd, {from: accounts[5]});
		await XenoFelixoyNJ6Cd.pause.call({from: accounts[4]});

		assert.equal(boolaaJUsAE, true)
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressTVUItO, addressaln1FSq, uintkNqdjnu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uint58pLKc = BigInt("1918")
		const uintOi9ZpJP = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uint58pLKc, uintOi9ZpJP, {from: accounts[4]});
		const uintJxM8zP = BigInt("1049")
		const addressHka3h6E = accounts[3]
		const uints3RfhHE = BigInt("1319")
		const address8PXDzw = accounts[4]
		const addressq4i5EPJ = accounts[0]
		const boolgHqrBKS = await XenoFelixoyNJ6Cd.transfer.call(addressHka3h6E, uintJxM8zP, {from: accounts[0]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressq4i5EPJ, address8PXDzw, uints3RfhHE, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.transfer.call(addressHka3h6E, uintJxM8zP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintpA0vlfN = BigInt("1918")
		const uinta8EL6mp = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintpA0vlfN, uinta8EL6mp, {from: accounts[4]});
		const uintokcfdcG = BigInt("309")
		const uintpK2FL2Q = BigInt("1319")
		const addressHTLKgo0 = accounts[3]
		const addressvbWHwlG = accounts[1]
		const uint256ZKpYrOO = await XenoFelixoyNJ6Cd.burn.call(uintokcfdcG, {from: accounts[0]});
		await XenoFelixoyNJ6Cd.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const stringpmXkJXP = await XenoFelixoyNJ6Cd.symbol.call({from: accounts[5]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressvbWHwlG, addressHTLKgo0, uintpK2FL2Q, {from: accounts[5]});

		await expect(XenoFelixoyNJ6Cd.burn.call(uintokcfdcG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringx8NGzcH = "1FESTyGvR9TuXDOROQoTKwt39A1ql6sCIWRdmG1vbIIQqyVIe137P"
		const stringz6Vm8kn = "vYl8AydJXK47ghfn8CGgVi8OFqHXIsg9j9f5C0SykyxDn1NnsD4x0Vdofe8j"
		const uintuoK5ARI = BigInt("1918")
		const uintZ7xIhML = BigInt("14")
		const XenoFelixoyNJ6Cd = await XenoFelix.new(stringx8NGzcH, stringz6Vm8kn, uintuoK5ARI, uintZ7xIhML, {from: accounts[4]});
		const addressknhmXuI = accounts[4]
		const uintDOHB7j6 = BigInt("1319")
		const addressigb0S6n = accounts[4]
		const addressrUuuQX = accounts[0]
		const uint256UbI2kdp = await XenoFelixoyNJ6Cd.balanceOf.call(addressknhmXuI, {from: accounts[1]});
		const boolJQNaP5r = await XenoFelixoyNJ6Cd.transferFrom.call(addressrUuuQX, addressigb0S6n, uintDOHB7j6, {from: accounts[5]});

		assert.equal(uint256UbI2kdp, BigInt("191800000000000000"))
		await expect(XenoFelixoyNJ6Cd.transferFrom.call(addressrUuuQX, addressigb0S6n, uintDOHB7j6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringB95gZjc = "gyThr7LoIbdkugYmzdWiTD9boYCLsXttSka5zMYPdxsWlNKizlNejLuPWgoxRv6yJfAJQS"
		const stringO1lfEx8 = "ZXeBq33JYTYiyI57aEjiSsueANbz9WUy4LBAQtk4OvgATG69O7QbIi5TO"
		const uintbzMBdW6 = BigInt("1064")
		const uintCqoUtH3 = BigInt("207")
		const XenoFelixc8jsibC = await XenoFelix.new(stringB95gZjc, stringO1lfEx8, uintbzMBdW6, uintCqoUtH3, {from: accounts[4]});
		const addressVhTNmha = "0x0000000000000000000000000000000000000001"
		const uint5lsg9q = BigInt("803")
		const addressjXY4lRM = accounts[3]
		const addresskMpeDmv = accounts[2]
		const uint256NOywvO = await XenoFelixc8jsibC.totalSupply.call({from: accounts[3]});
		const addressELrFI0T = await XenoFelixc8jsibC.addPauser.call(addressVhTNmha, {from: accounts[3]});
		const boolI1tsjQN = await XenoFelixc8jsibC.transfer.call(addressjXY4lRM, uint5lsg9q, {from: accounts[4]});
		await XenoFelixc8jsibC.pause.call({from: accounts[0]});
		const booloTvWIk0 = await XenoFelixc8jsibC.isOwner.call(addresskMpeDmv, {from: accounts[1]});

		assert.equal(uint256NOywvO, BigInt("22148947832101100151681283106569857428401917580412609446535871095676082323456"))
		await expect(XenoFelixc8jsibC.addPauser.call(addressVhTNmha, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})