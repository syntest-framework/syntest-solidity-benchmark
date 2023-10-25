const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGmwz5mc = BigInt("1829")
		const Cover_ZapIn_General_V1obQRWZ = await Cover_ZapIn_General_V1.new(uintGmwz5mc, {from: accounts[2]});
		const addressI1ftwcU = accounts[4]
		const addressKJx392a = accounts[2]
		const addressWf4YDm8 = accounts[5]
		const addressEjps7Fh = await Cover_ZapIn_General_V1obQRWZ.inCaseTokengetsStuck.call(addressI1ftwcU, {from: accounts[0]});
		const 
U2BxIh7 = await Cover_ZapIn_General_V1obQRWZ._getCoverDetails.call(addressKJx392a, {from: accounts[0]});
		await Cover_ZapIn_General_V1obQRWZ.withdraw.call({from: accounts[5]});
		await Cover_ZapIn_General_V1obQRWZ.stopInEmergency.call({from: accounts[3]});
		const address8DwDWM = await Cover_ZapIn_General_V1obQRWZ.transferOwnership.call(addressWf4YDm8, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintj8iHIjC = BigInt("673")
		const Cover_ZapIn_General_V1tvk8yme = await Cover_ZapIn_General_V1.new(uintj8iHIjC, {from: accounts[2]});
		const uintTD4HZBs = BigInt("424")
		const addressDAzDJnz = accounts[0]
		const byteRNw900T = "0x0e08"
		const addresstOQwzuz = accounts[5]
		const addressmJvcBY = accounts[4]
		const uint6FzpSL = BigInt("1631")
		const addressHfHMfrj = accounts[4]
		const addressPmMfsDv = accounts[2]
		const addressMMBzVTf = accounts[1]
		const addressD1HAFLC = accounts[4]
		const addressiOnAGyY = accounts[2]
		const uintE7e0oWv = BigInt("26")
		const addressHYGCggc = accounts[4]
		await Cover_ZapIn_General_V1tvk8yme._enterCover.call(addressDAzDJnz, uintTD4HZBs, {from: accounts[4]});
		const 
l1MjqUq = await Cover_ZapIn_General_V1tvk8yme.ZapIn.call(addressD1HAFLC, addressMMBzVTf, addressPmMfsDv, addressHfHMfrj, uint6FzpSL, addressmJvcBY, addresstOQwzuz, byteRNw900T, {from: accounts[5]});
		await Cover_ZapIn_General_V1tvk8yme.nonReentrant.call({from: accounts[5]});
		const 
wUP0xkc = await Cover_ZapIn_General_V1tvk8yme._getCoverDetails.call(addressiOnAGyY, {from: accounts[2]});
		const addressz72OEHE = await Cover_ZapIn_General_V1tvk8yme.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1tvk8yme._enterCover.call(addressHYGCggc, uintE7e0oWv, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintuyZDRJW = BigInt("34")
		const Cover_ZapIn_General_V1LHvDANy = await Cover_ZapIn_General_V1.new(uintuyZDRJW, {from: accounts[0]});
		const uintGbr8w1m = BigInt("1742")
		await Cover_ZapIn_General_V1LHvDANy.renounceOwnership.call({from: accounts[0]});
		const boolHYdFkK2 = await Cover_ZapIn_General_V1LHvDANy.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint16ldsfg0 = await Cover_ZapIn_General_V1LHvDANy.set_new_goodwill.call(uintGbr8w1m, {from: accounts[2]});
		await Cover_ZapIn_General_V1LHvDANy.renounceOwnership.call({from: accounts[4]});
		await Cover_ZapIn_General_V1LHvDANy.nonReentrant.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintqeORMQ = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintqeORMQ, {from: accounts[0]});
		const byteXu1fqv5 = "0x0b061e1f1e1f1214120c1906121c16"
		const addressn4TTnPa = accounts[1]
		const addresshDhbgQY = accounts[0]
		const uintHOJi6XO = BigInt("1151")
		const addressFNgFQ55 = accounts[1]
		const address6CG1wy = accounts[4]
		const addressS9FBX9a = accounts[0]
		const addressK2tl3jL = accounts[1]
		const boolSk2P31Z = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[4]});
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
		const 
zgzGcEg = await Cover_ZapIn_General_V1vk9EHVC.ZapIn.call(addressK2tl3jL, addressS9FBX9a, address6CG1wy, addressFNgFQ55, uintHOJi6XO, addresshDhbgQY, addressn4TTnPa, byteXu1fqv5, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCEPjmTq = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintCEPjmTq, {from: accounts[0]});
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
		const addressdOEVgu6 = await Cover_ZapIn_General_V1vk9EHVC.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintqulKD4F = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintqulKD4F, {from: accounts[0]});
		await Cover_ZapIn_General_V1vk9EHVC.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1vk9EHVC.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCbmVrd9 = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintCbmVrd9, {from: accounts[0]});
		const addressaTRDqgn = accounts[3]
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
		const addressxmzkbrm = await Cover_ZapIn_General_V1vk9EHVC.inCaseTokengetsStuck.call(addressaTRDqgn, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWO7ILBJ = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintWO7ILBJ, {from: accounts[0]});
		const uintVGFMFur = BigInt("1057")
		const uint16ks7qGRT = await Cover_ZapIn_General_V1vk9EHVC.set_new_goodwill.call(uintVGFMFur, {from: accounts[0]});
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEn7Snka = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintEn7Snka, {from: accounts[0]});
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1vk9EHVC.toggleContractActive.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintBR5G04z = BigInt("1432")
		const Cover_ZapIn_General_V1JVRTbXM = await Cover_ZapIn_General_V1.new(uintBR5G04z, {from: "0x0000000000000000000000000000000000000001"});
		const addresszagT8Uu = accounts[2]
		const addressEBstLqa = accounts[3]
		const byteUecGWn = "0x1311180d061c1b12030c0d1f1e05171f1c18021216121e"
		const addressWmEzaLu = accounts[3]
		const addresszkPnoeY = accounts[5]
		const uintGnS26n = BigInt("498")
		const address7zNKr7 = accounts[2]
		const addressslbPADI = accounts[5]
		const addressoBmyqt = accounts[5]
		const addresshIi181n = accounts[1]
		await Cover_ZapIn_General_V1JVRTbXM.withdraw.call({from: accounts[2]});
		const addressrobnwLz = await Cover_ZapIn_General_V1JVRTbXM.inCaseTokengetsStuck.call(addresszagT8Uu, {from: accounts[3]});
		const addressxCgygu = await Cover_ZapIn_General_V1JVRTbXM.toPayable.call(addressEBstLqa, {from: accounts[4]});
		const 
AVCbuDv = await Cover_ZapIn_General_V1JVRTbXM.ZapIn.call(addresshIi181n, addressoBmyqt, addressslbPADI, address7zNKr7, uintGnS26n, addresszkPnoeY, addressWmEzaLu, byteUecGWn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintSXCSSF = BigInt("1011")
		const Cover_ZapIn_General_V1vk9EHVC = await Cover_ZapIn_General_V1.new(uintSXCSSF, {from: accounts[0]});
		const addressCt4RQmL = accounts[2]
		const boolnvgzdqS = await Cover_ZapIn_General_V1vk9EHVC.isOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1vk9EHVC.renounceOwnership.call({from: accounts[0]});
		const addressXpskcfl = await Cover_ZapIn_General_V1vk9EHVC.transferOwnership.call(addressCt4RQmL, {from: accounts[0]});
	});
})